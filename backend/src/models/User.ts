import mongoose, { Schema } from "mongoose";
import { IUser } from "./types";

const User: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide an email"],
    },
    password: {
      type: String,
      required: [true, "Please provide an email"],
    },
    access_token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", User, "users");
