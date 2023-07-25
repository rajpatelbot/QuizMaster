import * as dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8001;
export const DB_USERNAME = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const CLUSTER_URL = process.env.CLUSTER_URL;
