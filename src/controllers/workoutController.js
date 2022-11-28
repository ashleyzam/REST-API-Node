const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getSingleWorkout = (req, res) => {
  const workout = workoutService.getSingleWorkout(req.params.workoutId);
  res.send(`Get workout ${req.params.workoutId}`);
};

const createWorkout = (req, res) => {
  const createdWorkout = workoutService.createWorkout(req.params.workoutId);
  res.send(`Create workout ${req.params.workoutId}`);
};

const updateSingleWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateSingleWorkout(
    req.params.workoutId
  );
  res.send(`Update workout ${req.params.workoutId}`);
};

const deleteSingleWorkout = (req, res) => {
  workoutService.deleteSingleWorkout(req.params.workoutId);
  res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
