import express from 'express';
import { getAllExercises } from '../controllers/exercises.controller.js';

const router = express.Router();

// Get all exercises
router.get('/getAll', getAllExercises);

export default router;