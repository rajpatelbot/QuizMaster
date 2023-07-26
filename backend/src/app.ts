import express, { Application } from "express";
import connectToDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import { PORT } from "./config/env";
import allRoutes from "./routes";

const app: Application = express();

dotenv.config();

void connectToDB();

app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`🏃‍♂️[SERVER]: Server is running on port ${PORT}`);
});
