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
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.excercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    excercises: body.excercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
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
