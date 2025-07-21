-- Инициализация базы данных Estatein
CREATE DATABASE IF NOT EXISTS estatein;
\c estatein;

-- Удаление существующих таблиц (если есть)
DROP TABLE IF EXISTS PRODUCTS;
DROP TABLE IF EXISTS FEEDBACKS;
DROP TABLE IF EXISTS QUESTIONS;
DROP TABLE IF EXISTS MESSAGES;

-- Создание пользовательских типов данных
CREATE TYPE HOW_DID_YOU_HEAR_ABOUT_US AS ENUM (
    'Google Search',
    'Social Media',
    'Referral',
    'Event or Conference',
    'Other'
);

CREATE TYPE INQUIRY_TYPE AS ENUM (
    'General Inquiry',
    'Support Request',
    'Partnership Opportunity',
    'Other'
);

-- Создание таблицы PRODUCTS
CREATE TABLE IF NOT EXISTS PRODUCTS (
    PRODUCT_ID INTEGER PRIMARY KEY,
    IMAGE TEXT NOT NULL,
    HEADING VARCHAR(100),
    DESCRIPTION VARCHAR(250),
    ISBEDROOM BOOLEAN DEFAULT FALSE,
    ISBATHROOM BOOLEAN DEFAULT FALSE,
    ISVILLA BOOLEAN DEFAULT FALSE, 
    PRICE INTEGER
);

-- Создание таблицы FEEDBACKS
CREATE TABLE IF NOT EXISTS FEEDBACKS (
    FEEDBACK_ID INTEGER PRIMARY KEY,
    STAR_COUNT INTEGER NOT NULL DEFAULT 5,
    HEADING VARCHAR(100) NOT NULL,
    DESCRIPTION VARCHAR(250) NOT NULL,
    ICON TEXT DEFAULT 'NO ICON',
    USER_NAME VARCHAR(100) NOT NULL,
    USER_COUNTRY VARCHAR(100) DEFAULT 'NOT SPECIFIED'
);

-- Создание таблицы QUESTIONS
CREATE TABLE IF NOT EXISTS QUESTIONS (
    QUESTION_ID INTEGER PRIMARY KEY,
    HEADING VARCHAR(100) NOT NULL,
    DESCRIPTION text NOT NULL
);

-- Создание таблицы MESSAGES
CREATE TABLE IF NOT EXISTS MESSAGES (
    MESSAGE_ID INTEGER PRIMARY KEY,
    CUSTOMER_NAME VARCHAR(250),
    CUSTOMER_LAST_NAME VARCHAR(250),
    EMAIL VARCHAR(250),
    PHONE VARCHAR(11),
    INQUIRY_TYPE INQUIRY_TYPE,
    HOW_DID_YOU_HEAR_ABOUT_US HOW_DID_YOU_HEAR_ABOUT_US,
    MESSAGE TEXT
);

-- Вставка тестовых данных в таблицу PRODUCTS
INSERT INTO PRODUCTS (PRODUCT_ID, IMAGE, HEADING, DESCRIPTION, ISBEDROOM, ISBATHROOM, ISVILLA, PRICE)
VALUES
    (1, 'Image-1', 'Luxury Bedroom Set', 'High-quality bedroom furniture set', true, false, false, 2500),
    (2, 'Image-2', 'Modern Bathroom Vanity', 'Stylish bathroom vanity with storage', false, true, false, 800),
    (3, 'Image', 'Villa with Pool', 'Spacious villa with private pool', false, false, true, 5000),
    (4, 'Image-3', 'Cozy Bedroom Set', 'Comfortable bedroom set for small spaces', true, false, false, 1800),
    (5, 'Image-4', 'Luxury Bathroom Suite', 'High-end bathroom suite with premium fixtures', false, true, false, 3000);

-- Вставка тестовых данных в таблицу FEEDBACKS
INSERT INTO FEEDBACKS (FEEDBACK_ID, STAR_COUNT, HEADING, DESCRIPTION, ICON, USER_NAME, USER_COUNTRY)
VALUES
    (1, 5, 'Amazing Experience', 'I absolutely loved this product! It exceeded my expectations.', 'Profile', 'John Doe', 'USA'),
    (2, 4, 'Great Quality', 'The quality of this product is outstanding. Highly recommended.', 'Profile-1', 'Jane Smith', 'Canada'),
    (3, 3, 'Average Experience', 'The product was decent, but not as impressive as I had hoped.', 'Profile-2', 'Michael Johnson', 'UK'),
    (4, 5, 'Fantastic Villa', 'This villa was the perfect getaway. I had an amazing time.', 'Profile-3', 'Sarah Lee', 'Australia'),
    (5, 4, 'Satisfied Customer', 'I am very satisfied with my purchase. The product is great value for money.', 'Profile-4', 'David Kim', 'South Korea');

-- Вставка тестовых данных в таблицу QUESTIONS
INSERT INTO QUESTIONS (QUESTION_ID, HEADING, DESCRIPTION)
VALUES
    (1, 'What is the return policy?', 'I would like to know the details of the return policy for your products.'),
    (2, 'Do you offer delivery services?', 'I am interested in purchasing a product, but I need to know if you offer delivery services.'),
    (3, 'Can I customize the product?', 'I was wondering if it is possible to customize the product to my specific needs.'),
    (4, 'What is the warranty coverage?', 'I would like to know the warranty details for the products you sell.'),
    (5, 'How long does shipping take?', 'I need to know the estimated shipping time for the product I am interested in buying.'),
    (6, 'Can you provide a comprehensive overview of your company''s ESG policies?', 'I would like to receive a detailed explanation of your company''s Environmental, Social, and Governance (ESG) policies and practices. Specifically, I am interested in learning about your efforts to reduce carbon emissions, manage waste responsibly, ensure ethical sourcing of raw materials, support local communities, promote diversity and inclusion within the workplace, and maintain transparent corporate governance. Additionally, could you share any sustainability certifications (e.g., ISO 14001, LEED, Fair Trade), partnerships with environmental organizations, or long-term goals related to climate action and resource efficiency?');
