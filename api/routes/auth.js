import express from 'express';
import { login, register, registerAdmin, sendEmail, resetPassword, updateData } from '../controllers/auth.controller.js';
import { verifyToken } from '../utils/verifyToken.js'; 

const router = express.Router();

//register
router.post("/register", register);

//login
router.post("/login", login);

//register as admin
router.post("/register-admin", registerAdmin);

// send reset mail
router.post("/send-email", sendEmail);

//reset password
router.post("/reset-password", resetPassword);

//update information
router.put("/update-data", verifyToken, updateData);

export default router;