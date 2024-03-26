import express from 'express';
import { getAllMemberships } from '../controllers/membership.controller.js';

const router = express.Router();

// Get all memberships
router.get('/getAll', getAllMemberships);

export default router;