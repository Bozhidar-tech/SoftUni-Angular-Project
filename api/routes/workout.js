import express from 'express';
import { createWorkout, getAllWorkouts, deleteWorkoutById } from '../controllers/workout.controller.js';
import { verifyToken } from '../utils/verifyToken.js'; 

const router = express.Router();

// Create a new workout (requires authentication)
router.post('/create', verifyToken, createWorkout);

// Get all workouts of the authenticated user (requires authentication)
router.get('/getAll', verifyToken, getAllWorkouts);

// Delete a workout by ID (requires authentication)
router.delete('/:id', verifyToken, deleteWorkoutById);

export default router;

