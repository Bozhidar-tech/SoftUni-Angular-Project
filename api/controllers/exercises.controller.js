import Exercise from '../models/Exercise.js';

export const getAllExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find().sort({ name: 1 });
        res.status(200).json({
            success: true,
            message: "All exercises fetched successfully!",
            data: exercises
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch exercises!",
            error: error.message
        });
    }
};