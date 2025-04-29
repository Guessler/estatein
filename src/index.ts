import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './models/db';
import { getProducts } from "./controllers/products"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Маршруты
app.get('/api/products', getProducts);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
