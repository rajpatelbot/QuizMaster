import mongoose from "mongoose";
import { ConnectionOptions } from "tls";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectionOptions);
    console.log("Connected to Database!!");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default connectToDB;
