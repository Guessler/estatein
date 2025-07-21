import dotenv from "dotenv";
import { Pool } from 'pg';

// Загружаем .env только если работаем локально
// В Coolify это игнорируется — переменные приходят напрямую
dotenv.config();

interface PoolConfig {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
}

// Приоритет: сначала DATABASE_URL, потом DB_*, fallback — localhost
let poolConfig: PoolConfig | { connectionString: string };

if (process.env.DATABASE_URL) {
    // Рекомендуемый способ: через DATABASE_URL (в Coolify)
    poolConfig = {
        connectionString: process.env.DATABASE_URL,
    };
} else {
    // Для локальной разработки
    poolConfig = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_NAME || 'estatein',
        port: parseInt(process.env.DB_PORT || '5432', 10),
    };
}

const pool = new Pool(poolConfig);

// Проверка подключения
pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("❌ Error connecting to the database:", err);
    } else {
        console.log("✅ Connected to the database:", res.rows[0]);
    }
});

export default pool;