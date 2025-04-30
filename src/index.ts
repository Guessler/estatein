import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './models/db';
import { getProducts } from "./controllers/products";
import { 
    getFeedbacks, 
    getFeedbackById, 
    createFeedback, 
    updateFeedback, 
    deleteFeedback 
} from "./controllers/feedbacks";
import { 
    getQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion
} from "./controllers/questions";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Маршруты для продуктов
app.get('/api/products', getProducts);

// Маршруты для отзывов
app.get('/api/feedbacks', getFeedbacks);
app.get('/api/feedbacks/:feedbackId', getFeedbackById);
app.post('/api/feedbacks', createFeedback);
app.put('/api/feedbacks/:feedbackId', updateFeedback);
app.delete('/api/feedbacks/:feedbackId', deleteFeedback);

// Маршруты для вопросов
app.get('/api/questions', getQuestions);
app.get('/api/questions/:questionId', getQuestionById);
app.post('/api/questions', createQuestion);
app.put('/api/questions/:questionId', updateQuestion);
app.delete('/api/questions/:questionId', deleteQuestion);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});