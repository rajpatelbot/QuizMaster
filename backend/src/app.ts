import express, { Application } from "express";
import connectToDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors";
import { PORT } from "./config/env";

const app: Application = express();

dotenv.config();

void connectToDB();

app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.listen(PORT, () => {
  console.log(`🏃‍♂️[SERVER]: Server is running on port ${PORT}`);
});
