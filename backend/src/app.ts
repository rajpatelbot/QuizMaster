import express, { Application } from "express";
import serverless from "serverless-http";
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

app.use(allRoutes);

// export const handler = serverless(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
