import express from 'express';
import { getAllArticles, createArticle, updateArticleById, deleteArticleById, getArticleById } from '../controllers/article.controller.js';
import { verifyAdmin, verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

// Get all articles
router.get('/getAll', getAllArticles);

// Get a article by ID
router.get('/:id', getArticleById);

// Create a new article (requires authentication)
router.post('/create', verifyToken, verifyAdmin, createArticle);

// Update an article by ID (requires authentication)
router.put('/:id', verifyToken, verifyAdmin, updateArticleById);

// Delete an article by ID (requires authentication)
router.delete('/:id', verifyToken, verifyAdmin, deleteArticleById);

export default router;