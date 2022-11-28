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
const updateSingleWorkout = () => {
  return;
};
const deleteSingleWorkout = () => {
  return;
};
module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  updateSingleWorkout,
  deleteSingleWorkout,
};
