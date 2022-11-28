const getAllWorkouts = (req, res) => {
  res.send("Get all workouts");
};

const getSingleWorkout = (req, res) => {
  res.send(`Get workout ${req.params.workoutId}`);
};

const createWorkout = (req, res) => {
  res.send(`Create workout ${req.params.workoutId}`);
};

const updateWorkout = (req, res) => {
  res.send(`Update workout ${req.params.workoutId}`);
};

const deleteSingleWorkout = (req, res) => {
  res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteSingleWorkout,
};
