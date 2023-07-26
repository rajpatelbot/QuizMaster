import mongoose from "mongoose";
import { MongoClientOptions } from "mongodb";
import { DB_USERNAME, DB_PASSWORD, CLUSTER_URL, DB_NAME } from "./env";

if (!DB_USERNAME || !DB_PASSWORD || !CLUSTER_URL || !DB_NAME) {
  throw new Error(`Missing environment variables for MongoDB connection`);
}

const MONGODB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${CLUSTER_URL}/${DB_NAME}?retryWrites=true&w=majority`;

async function connectToDB() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions;

  try {
    await mongoose.connect(MONGODB_URI, options);
    console.log("⚡️[DB]: Connected successfully!");
  } catch (error) {
    console.log(`❌[DB]: Could not connect. Here is the error: ${error as string}`);
    process.exit();
  }
}

export default connectToDB;
