import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017/meal_prep_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("db up");
});

app.listen(3000, () => {
  console.log("server up");
});
