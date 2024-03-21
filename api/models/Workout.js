import mongoose from "mongoose";

const WorkoutSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      createdBy: { 
        type: String,
        required: true
      }
    },
    {
      timestamps: true
    }
  );
  
  export default mongoose.model("Workout", WorkoutSchema);