import { Request, Response } from 'express';
import pool from '../models/db';

/**
 * Получить все отзывы
 */
export const getFeedbacks = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM feedbacks');
        console.log('Fetched feedbacks:', result.rows);
        return res.json(result.rows);
    } catch (err: any) {
        console.error('Error in getFeedbacks:', err.message, err.stack);
        return res.status(500).json({
            error: 'Internal server error',
            details: err.message,
        });
    }
};

/**
 * Получить отзыв по ID
 */
export const getFeedbackById = async (req: Request, res: Response) => {
    try {
        const { feedbackId } = req.params;

        // Валидация ID
        if (!feedbackId || isNaN(Number(feedbackId))) {
            return res.status(400).json({ error: 'Invalid feedback ID' });
        }

        const result = await pool.query(
            'SELECT * FROM feedbacks WHERE feedback_id = $1',
            [feedbackId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Feedback not found' });
        }

        return res.json(result.rows[0]);
    } catch (err: any) {
        console.error('Error in getFeedbackById:', err.message, err.stack);
        return res.status(500).json({
            error: 'Internal server error',
            details: err.message,
        });
    }
};

/**
 * Создать новый отзыв
 */
export const createFeedback = async (req: Request, res: Response) => {
    try {
        const { starCount, heading, description, icon, userName, userCountry } = req.body;

        // Валидация обязательных полей
        if (!starCount || !description || !userName) {
            return res.status(400).json({
                error: 'Missing required fields: starCount, description, userName',
            });
        }

        const result = await pool.query(
            `INSERT INTO feedbacks 
             (star_count, heading, description, icon, user_name, user_country) 
             VALUES ($1, $2, $3, $4, $5, $6) 
             RETURNING *`,
            [starCount, heading, description, icon || null, userName, userCountry || null]
        );

        console.log('Created feedback:', result.rows[0]);
        return res.status(201).json(result.rows[0]);
    } catch (err: any) {
        console.error('Error in createFeedback:', err.message, err.stack);
        return res.status(500).json({
            error: 'Internal server error',
            details: err.message,
        });
    }
};

/**
 * Обновить отзыв
 */
export const updateFeedback = async (req: Request, res: Response) => {
    try {
        const { feedbackId } = req.params;
        const { starCount, heading, description, icon, userName, userCountry } = req.body;

        if (!feedbackId || isNaN(Number(feedbackId))) {
            return res.status(400).json({ error: 'Invalid feedback ID' });
        }

        const result = await pool.query(
            `UPDATE feedbacks 
             SET star_count = $1, 
                 heading = $2, 
                 description = $3, 
                 icon = $4, 
                 user_name = $5, 
                 user_country = $6 
             WHERE feedback_id = $7 
             RETURNING *`,
            [starCount, heading, description, icon, userName, userCountry, feedbackId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Feedback not found' });
        }

        return res.json(result.rows[0]);
    } catch (err: any) {
        console.error('Error in updateFeedback:', err.message, err.stack);
        return res.status(500).json({
            error: 'Internal server error',
            details: err.message,
        });
    }
};

/**
 * Удалить отзыв
 */
export const deleteFeedback = async (req: Request, res: Response) => {
    try {
        const { feedbackId } = req.params;

        if (!feedbackId || isNaN(Number(feedbackId))) {
            return res.status(400).json({ error: 'Invalid feedback ID' });
        }

        const result = await pool.query(
            'DELETE FROM feedbacks WHERE feedback_id = $1',
            [feedbackId]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Feedback not found' });
        }

        return res.status(204).send();
    } catch (err: any) {
        console.error('Error in deleteFeedback:', err.message, err.stack);
        return res.status(500).json({
            error: 'Internal server error',
            details: err.message,
        });
    }
};