import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/global.type";

const UserSchema: Schema = new mongoose.Schema(
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
      required: [true, "Please provide an password"],
    },
    profile: {
      type: String,
      required: [true, "Please provide a profile"],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<IUser>("User", UserSchema, "users");

export default User;
