import express from "express";
import cookieParser from "cookie-parser";
//this is fot the config file
import { config } from "dotenv";

import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors";
export const app = express();

//config file path to app
config({
  path: "./data/config.env",
});

app.use(express.json());
app.use(cookieParser());
app.use( 
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    //credentials is for headeers
    credentials: true,
  })
);

// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

//using error MiddleWaew
app.use(errorMiddleWare);
