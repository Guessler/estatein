import { Request, Response } from 'express';
import pool from '../models/db';

export const getQuestions = async (req: Request, res: Response) => {
    try {
        const { rows: questions } = await pool.query(
            'SELECT * FROM QUESTIONS ORDER BY QUESTION_ID'
        );
        res.json(questions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getQuestionById = async (req: Request, res: Response) => {
    try {
        const { questionId } = req.params;
        const { rows: [question] } = await pool.query(
            'SELECT * FROM QUESTIONS WHERE QUESTION_ID = $1',
            [questionId]
        );

        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.json(question);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const createQuestion = async (req: Request, res: Response) => {
    try {
        const { heading, description } = req.body;
        const { rows: [newQuestion] } = await pool.query(
            `INSERT INTO QUESTIONS 
             (HEADING, DESCRIPTION) 
             VALUES ($1, $2) 
             RETURNING *`,
            [heading, description]
        );
        res.status(201).json(newQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateQuestion = async (req: Request, res: Response) => {
    try {
        const { questionId } = req.params;
        const { heading, description } = req.body;

        const { rows: [updatedQuestion] } = await pool.query(
            `UPDATE QUESTIONS 
             SET HEADING = $1, 
                 DESCRIPTION = $2
             WHERE QUESTION_ID = $3 
             RETURNING *`,
            [heading, description, questionId]
        );

        if (!updatedQuestion) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.json(updatedQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteQuestion = async (req: Request, res: Response) => {
    try {
        const { questionId } = req.params;
        const { rowCount } = await pool.query(
            'DELETE FROM QUESTIONS WHERE QUESTION_ID = $1',
            [questionId]
        );

        if (rowCount === 0) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};