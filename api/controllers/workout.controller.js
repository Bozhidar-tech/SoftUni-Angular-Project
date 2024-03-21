import Workout from "../models/workout.js";

// Controller function to create a new workout
export const createWorkout = async (req, res, next) => {
    try {
        const { name, category, duration } = req.body;
        const userId = req.user.id;
        const newWorkout = new Workout({
            name,
            category,
            duration,
            createdBy: userId
        });

        const result = await newWorkout.save();
        res.status(201).json({
            success: true,
            message: "Workout created successfully!",
            data: {...newWorkout, _id : result._id.toHexString()}
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create workout!",
            error: error.message
        });
    }
};

// Controller function to fetch all workouts of a user
export const getAllWorkouts = async (req, res) => {
  try {


    const userId = req.user.id; 

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access! Missing user information.",
      });
    }
   
    const response = await Workout.find({ createdBy: userId });
    
    res.status(200).json({
      success: true,
      message: "User workouts fetched successfully!",
      data: response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user workouts!",
      error: error.message
    });
  }
};
  
  // Controller function to delete a workout by ID
  export const deleteWorkoutById = async (req, res) => {
    try {
      const userId = req.user.id;
      const deletedWorkout = await Workout.findOneAndDelete({
        _id: req.params.id,
        createdBy: userId
      });
      
      if (!deletedWorkout) {
        return res.status(404).json({
          success: false,
          message: "Workout not found!"
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Workout deleted successfully!",
        data: deletedWorkout
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete workout!",
        error: error.message
      });
    }
};