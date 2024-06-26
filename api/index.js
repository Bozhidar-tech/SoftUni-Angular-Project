import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import workoutRoute from './routes/workout.js';
import productRoute from './routes/product.js';
import membershipRoute from './routes/membership.js';
import articleRoute from './routes/article.js';
import exerciseRoute from './routes/exercises.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRoute);
app.use("/api/workout", workoutRoute);
app.use("/api/product", productRoute);
app.use("/api/membership", membershipRoute);
app.use("/api/article", articleRoute);
app.use("/api/exercises", exerciseRoute);

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