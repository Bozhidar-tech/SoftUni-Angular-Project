import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import workoutRoute from './routes/workout.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
// const port = 3000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRoute);
app.use("/api/workout", workoutRoute);


// Error Handler Middleware
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: errorMessage,
        stack: err.stack
    })
});

// Success Handler Middleware
app.use((obj, req, res, next) => {
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong!";
    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a === obj.status) ? true : false,
        status: statusCode,
        message: message,
        data: obj.data
    })
});

// DB Connection
const connectMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
    }catch(error){
        throw error;
    }
}


// Start the server
app.listen(3000, () => {
connectMongoDB();
console.log('Listening on port 3000')
});