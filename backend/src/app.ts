import express, { Application } from "express";
import connectToDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors";

const app: Application = express();

dotenv.config();

void connectToDB();

app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
