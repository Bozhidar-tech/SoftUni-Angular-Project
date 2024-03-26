import express from 'express';
import { createProduct, getAllProducts, updateProductById, deleteProductById } from '../controllers/product.controller.js';
import { verifyAdmin, verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

// Create a new product (requires authentication)
router.post('/create', verifyToken, verifyAdmin, createProduct);

// Get all products
router.get('/getAll', getAllProducts);

// Update a product by ID (requires authentication)
router.put('/:id',verifyAdmin, verifyToken, updateProductById);

// Delete a product by ID (requires authentication)
router.delete('/:id', verifyToken,verifyAdmin, deleteProductById);

export default router;