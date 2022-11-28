const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};
const getSingleWorkout = () => {
  return;
};
const createWorkout = () => {
  return;
};
const updateWorkout = () => {
  return;
};
const deleteSingleWorkout = () => {
  return;
};
module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteSingleWorkout,
};
