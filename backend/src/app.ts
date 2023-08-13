import express, { Application } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./config/db";
import allRoutes from "./routes";
import { PORT } from "./config/env";

const app: Application = express();

dotenv.config();

connectToDB();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use("/uploads", express.static("uploads"));

app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`🏃‍♂️[SERVER]: Server is running on port ${PORT}`);
});
