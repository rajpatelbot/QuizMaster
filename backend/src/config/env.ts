import * as dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env;

//* Database connection config
export const PORT = NODE_ENV.PORT || 8001;
export const DB_USERNAME = NODE_ENV.DB_USER;
export const DB_PASSWORD = NODE_ENV.DB_PASSWORD;
export const DB_NAME = NODE_ENV.DB_NAME;
export const CLUSTER_URL = NODE_ENV.CLUSTER_URL;

export const JWT_SECRET_KEY = NODE_ENV.JWT_SECRET_KEY || "secretkey";

//* Firebase config
export const apiKey = NODE_ENV.API_KEY;
export const authDomain = NODE_ENV.AUTH_DOMAIN;
export const projectId = NODE_ENV.PROJECT_ID;
export const storageBucket = NODE_ENV.STORAGE_BUCKET;
export const messagingSenderId = NODE_ENV.MESSAGING_SENDER_ID;
export const appId = NODE_ENV.APP_ID;
export const measurementId = NODE_ENV.MEASUREMENT_ID;
