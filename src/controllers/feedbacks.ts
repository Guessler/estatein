import { Request, Response } from 'express';
import pool from '../models/db';

export const getFeedbacks = async (req: Request, res: Response) => {
    try {
        const { rows: feedbacks } = await pool.query(
            'SELECT * FROM FEEDBACKS'
        );
        res.json(feedbacks);
        console.log('SQL query result:', feedbacks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getFeedbackById = async (req: Request, res: Response) => {
    try {
        const { feedbackId } = req.params;
        const { rows: [feedback] } = await pool.query(
            'SELECT * FROM FEEDBACKS WHERE FEEDBACK_ID = $1',
            [feedbackId]
        );

        if (!feedback) {
            return res.status(404).json({ error: 'Feedback not found' });
        }

        res.json(feedback);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const createFeedback = async (req: Request, res: Response) => {
    try {
        const { starCount, heading, description, icon, userName, userCountry } = req.body;
        const { rows: [newFeedback] } = await pool.query(
            `INSERT INTO FEEDBACKS 
             (STAR_COUNT, HEADING, DESCRIPTION, ICON, USER_NAME, USER_COUNTRY) 
             VALUES ($1, $2, $3, $4, $5, $6) 
             RETURNING *`,
            [starCount, heading, description, icon, userName, userCountry]
        );
        res.status(201).json(newFeedback);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateFeedback = async (req: Request, res: Response) => {
    try {
        const { feedbackId } = req.params;
        const { starCount, heading, description, icon, userName, userCountry } = req.body;

        const { rows: [updatedFeedback] } = await pool.query(
            `UPDATE FEEDBACKS 
             SET STAR_COUNT = $1, 
                 HEADING = $2, 
                 DESCRIPTION = $3, 
                 ICON = $4, 
                 USER_NAME = $5, 
                 USER_COUNTRY = $6 
             WHERE FEEDBACK_ID = $7 
             RETURNING *`,
            [starCount, heading, description, icon, userName, userCountry, feedbackId]
        );

        if (!updatedFeedback) {
            return res.status(404).json({ error: 'Feedback not found' });
        }

        res.json(updatedFeedback);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteFeedback = async (req: Request, res: Response) => {
    try {
        const { feedbackId } = req.params;
        const { rowCount } = await pool.query(
            'DELETE FROM FEEDBACKS WHERE FEEDBACK_ID = $1',
            [feedbackId]
        );

        if (rowCount === 0) {
            return res.status(404).json({ error: 'Feedback not found' });
        }

        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};