import fs from 'fs';
import path from 'path';
import pool from '../models/db';

/**
 * Инициализация базы данных из SQL файла
 */
export async function initializeDatabase(): Promise<void> {
    try {
        console.log('Начинаем инициализацию базы данных...');
        
        // Читаем SQL файл
        const sqlFilePath = path.join(__dirname, '../../src/database/init.sql');
        const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
        
        // Разделяем SQL команды (исключаем команды создания БД и подключения)
        const sqlCommands = sqlContent
            .split('\n')
            .filter(line => 
                !line.trim().startsWith('--') && 
                !line.trim().startsWith('CREATE DATABASE') &&
                !line.trim().startsWith('\\c') &&
                line.trim() !== ''
            )
            .join('\n')
            .split(';')
            .filter(command => command.trim() !== '');

        // Выполняем каждую команду
        for (const command of sqlCommands) {
            if (command.trim()) {
                await pool.query(command.trim());
                console.log('Выполнена команда:', command.trim().substring(0, 50) + '...');
            }
        }
        
        console.log('База данных успешно инициализирована!');
        
        // Проверяем созданные таблицы
        const tablesResult = await pool.query(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        `);
        
        console.log('Созданные таблицы:', tablesResult.rows.map(row => row.table_name));
        
    } catch (error) {
        console.error('Ошибка при инициализации базы данных:', error);
        throw error;
    }
}

/**
 * Проверка подключения к базе данных
 */
export async function checkDatabaseConnection(): Promise<boolean> {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Подключение к базе данных успешно:', result.rows[0]);
        return true;
    } catch (error) {
        console.error('Ошибка подключения к базе данных:', error);
        return false;
    }
}

/**
 * Получение информации о таблицах
 */
export async function getDatabaseInfo(): Promise<void> {
    try {
        // Получаем список таблиц
        const tablesResult = await pool.query(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        `);
        
        console.log('\n=== ИНФОРМАЦИЯ О БАЗЕ ДАННЫХ ===');
        console.log('Таблицы в базе данных:');
        
        for (const table of tablesResult.rows) {
            const tableName = table.table_name;
            console.log(`\n📋 Таблица: ${tableName.toUpperCase()}`);
            
            // Получаем количество записей в таблице
            const countResult = await pool.query(`SELECT COUNT(*) FROM ${tableName}`);
            console.log(`   Количество записей: ${countResult.rows[0].count}`);
            
            // Получаем структуру таблицы
            const columnsResult = await pool.query(`
                SELECT column_name, data_type, is_nullable, column_default
                FROM information_schema.columns 
                WHERE table_name = $1
                ORDER BY ordinal_position
            `, [tableName]);
            
            console.log('   Колонки:');
            columnsResult.rows.forEach(col => {
                console.log(`     - ${col.column_name}: ${col.data_type} ${col.is_nullable === 'NO' ? '(NOT NULL)' : ''}`);
            });
        }
        
        // Получаем информацию о пользовательских типах
        const enumsResult = await pool.query(`
            SELECT t.typname, e.enumlabel
            FROM pg_type t 
            JOIN pg_enum e ON t.oid = e.enumtypid  
            ORDER BY t.typname, e.enumsortorder
        `);
        
        if (enumsResult.rows.length > 0) {
            console.log('\n🏷️  Пользовательские типы (ENUM):');
            const enums: { [key: string]: string[] } = {};
            
            enumsResult.rows.forEach(row => {
                if (!enums[row.typname]) {
                    enums[row.typname] = [];
                }
                enums[row.typname].push(row.enumlabel);
            });
            
            Object.entries(enums).forEach(([typeName, values]) => {
                console.log(`   ${typeName}: [${values.join(', ')}]`);
            });
        }
        
    } catch (error) {
        console.error('Ошибка при получении информации о базе данных:', error);
    }
}

// Если файл запускается напрямую
if (require.main === module) {
    (async () => {
        try {
            await checkDatabaseConnection();
            await initializeDatabase();
            await getDatabaseInfo();
            process.exit(0);
        } catch (error) {
            console.error('Критическая ошибка:', error);
            process.exit(1);
        }
    })();
}
