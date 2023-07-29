import { Request, Response } from "express";
import { hash } from "bcrypt";
import User from "../models/User";
import { IUser } from "../types/global.type";

import {
  ACCOUNT_CREATED_SUCCESSFULLY,
  ALL_FIELDS_REQUIRED,
  BAD_REQUEST,
  CREATED,
  EMAIL_ALREADY_EXISTS,
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_CODE,
} from "../constants";
import { userSignupValidation } from "../validations/userValidation";

export const signup = async (req: Request, res: Response) => {
  try {
    const payload = req.body as IUser;

    const { error } = userSignupValidation.validate(payload);
    if (error) {
      return res.status(BAD_REQUEST).json({ message: error.message, success: false });
    }

    const { email, name, password } = payload;

    if (!email || !name || !password) {
      return res.status(BAD_REQUEST).json({ message: ALL_FIELDS_REQUIRED, success: false });
    }

    const existedEmail = await User.findOne({ email });
    if (existedEmail) {
      return res.status(BAD_REQUEST).json({ message: EMAIL_ALREADY_EXISTS, success: false });
    }

    const hashedPassword: string = await hash(password, 10);

    const newUserWithHashedPassword = new User({ ...payload, password: hashedPassword });

    const newUser = await newUserWithHashedPassword.save();
    return res.status(CREATED).json({ message: ACCOUNT_CREATED_SUCCESSFULLY, user: newUser, success: true });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR, error, success: false });
  }
};
