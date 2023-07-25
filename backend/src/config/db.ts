import { MongoClient, MongoClientOptions } from "mongodb";
import { DB_USERNAME, DB_PASSWORD, CLUSTER_URL, DB_NAME } from "./env";

if (!DB_USERNAME || !DB_PASSWORD || !CLUSTER_URL) {
  throw new Error("DB_USERNAME or DB_PASSWORD or CLUSTER_URL is not defined");
}

const MONGODB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${CLUSTER_URL}?retryWrites=true&w=majority`;

async function connectToDB() {
  const options: MongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions;

  const client = new MongoClient(MONGODB_URI, options);

  try {
    await client.connect();
    console.log("⚡️[DB]: Connected successfully!");
    return client.db(DB_NAME);
  } catch (error) {
    console.log(`❌[DB]: Could not connect. Here is the error: ${error as string}`);
    process.exit(1);
  }
}

export default connectToDB;
