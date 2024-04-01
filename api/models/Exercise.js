import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    bodyPart: {
        type: String,
        required: true
    }
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);
export default Exercise;