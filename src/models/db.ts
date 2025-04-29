import dotenv from "dotenv";
import { Pool } from 'pg';
dotenv.config();

interface PoolConfig {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
}

const poolConfig: PoolConfig = {
    host: process.env.VITE_DB_HOST as string,
    user: process.env.VITE_DB_USER as string,
    password: process.env.VITE_DB_PASSWORD as string,
    database: process.env.VITE_DB_NAME as string,
    port: parseInt(process.env.VITE_DB_PORT || '5432', 10),
};

const pool = new Pool(poolConfig);

pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database:", res.rows[0]);
    }
});

export default pool;
