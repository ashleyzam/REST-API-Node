const express = require("express");
const v1WorkOutRouter = require("./v1/routes/workoutRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/workouts", v1WorkOutRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
