import { Request, Response } from 'express';
import pool from '../models/db';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const { rows: products } = await pool.query(
            'SELECT * FROM PRODUCTS'
        );
        res.json(products);

        console.log('SQL query result:', products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};




export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const { name, description, price } = req.body;
        const { rows: [updatedProduct] } = await pool.query(
            'UPDATE PRODUCTS SET NAME = $1, DESCRIPTION = $2, PRICE = $3, UPDATED_AT = CURRENT_TIMESTAMP WHERE PRODUCT_ID = $4 RETURNING *',
            [name, description, price, productId]
        );
        res.json(updatedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
