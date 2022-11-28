const express = require("express");
const workoutController = require("../../controllers/workoutController");
const router = express.Router();

router
  .get("/", workoutController.getAllWorkouts)
  .get("/:workoutId", workoutController.getSingleWorkout)
  .post("/:workoutId", workoutController.createWorkout)
  .patch("/:workoutId", workoutController.updateWorkout)
  .delete("/:workoutId", workoutController.deleteSingleWorkout);

module.exports = router;
