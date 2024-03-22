import express from 'express';
import { createProduct, getAllProducts, updateProductById, deleteProductById } from '../controllers/product.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

// Create a new product (requires authentication)
router.post('/create', verifyToken, createProduct);

// Get all products
router.get('/getAll', getAllProducts);

// Update a product by ID (requires authentication)
router.put('/:id', verifyToken, updateProductById);

// Delete a product by ID (requires authentication)
router.delete('/:id', verifyToken, deleteProductById);

export default router;