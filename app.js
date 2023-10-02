import express from "express";

//this is fot the config file
import { config } from "dotenv";

import userRouter from "./routes/user.js";

export const app = express();

//config file path to app
config({
  path: "./data/config.env",
});

app.use(express.json());

app.use("/users", userRouter);
