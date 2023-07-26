import { Request, Response } from "express";
import { hash } from "bcrypt";
import User from "../models/User";
import { IUser } from "../types/global.type";

export const signup = async (req: Request, res: Response) => {
  try {
    const payload: IUser = req.body as IUser;

    const { email, name, password } = payload;

    if (!email || !name || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existedEmail = await User.findOne({ email });
    if (existedEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword: string = await hash(password, 10);

    const newUserWithHashedPassword = new User({ ...payload, password: hashedPassword });

    const newUser = await newUserWithHashedPassword.save();
    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error during user signup:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};
