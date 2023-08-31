import { CookieOptions, Request, Response } from "express";
import bcrypt from "bcrypt";
import { hash } from "bcrypt";
import User from "../models/User";
import { userLoginValidation, userSignupValidation } from "../validations/userValidation";
import { webToken } from "../utils/generateJWT";

import {
  ACCOUNT_CREATED_SUCCESSFULLY,
  ALL_FIELDS_REQUIRED,
  BAD_REQUEST,
  COOKIE_EXPIRES_IN,
  CREATED,
  EMAIL_ALREADY_EXISTS,
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_CODE,
  INVALID_CREDENTIALS,
  LOGIN_SUCCESSFULLY,
  OK,
} from "../constants";

import { IControllerFnReturn } from "./types";
import { IUser } from "../types/global.type";

export const signup = async (req: Request, res: Response): IControllerFnReturn => {
  try {
    const payload = req.body as IUser;

    const newPayload = { ...payload, profile: req.file?.path ?? req.body.profile };

    const { error } = userSignupValidation.validate(newPayload);
    if (error) {
      return res.status(BAD_REQUEST).json({ message: error.message, success: false });
    }

    const { email, name, password, profile } = newPayload;

    if (!email || !name || !password || !profile) {
      return res.status(BAD_REQUEST).json({ message: ALL_FIELDS_REQUIRED, success: false });
    }

    const existedUser: IUser | null = await User.findOne({ email });
    if (existedUser) {
      return res.status(BAD_REQUEST).json({ message: EMAIL_ALREADY_EXISTS, success: false });
    }

    const hashedPassword: string = await hash(password, 10);
    const newUserWithHashedPassword: IUser = new User({ ...newPayload, password: hashedPassword });

    const newUser = await newUserWithHashedPassword.save();
    return res.status(CREATED).json({ message: ACCOUNT_CREATED_SUCCESSFULLY, data: newUser, success: true });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR, error, success: false });
  }
};

export const login = async (req: Request, res: Response): IControllerFnReturn => {
  try {
    const payload = req.body as Partial<IUser>;

    const { email, password } = payload;

    const { error } = userLoginValidation.validate(payload);
    if (error) {
      return res.status(BAD_REQUEST).json({ message: error.message, success: false });
    }

    if (!email || !password) {
      return res.status(BAD_REQUEST).json({ message: ALL_FIELDS_REQUIRED, success: false });
    }

    const existedUser: IUser | null = await User.findOne({ email });
    if (!existedUser) {
      return res.status(BAD_REQUEST).json({ message: INVALID_CREDENTIALS, success: false });
    }

    const isPasswordValid: boolean = await bcrypt.compare(password, existedUser.password);
    if (!isPasswordValid) {
      return res.status(BAD_REQUEST).json({ message: INVALID_CREDENTIALS, success: false });
    } else {
      const token = webToken(existedUser._id as string, existedUser.email as Partial<IUser>);

      const cookieOptions: CookieOptions = {
        secure: false,
        httpOnly: true,
        // maxAge: COOKIE_EXPIRES_IN,
        expires: new Date(Date.now() + COOKIE_EXPIRES_IN),
      };

      if (token) {
        res.cookie("token", token, cookieOptions);
      }

      return res.status(OK).json({ message: LOGIN_SUCCESSFULLY, data: existedUser, token: token, success: true });
    }
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR, error, success: false });
  }
};

export const getUserById = async (req: Request, res: Response): IControllerFnReturn => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(BAD_REQUEST).json({ message: "User not found", success: false });
    }
    return res.status(OK).json({ data: user, success: true });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR, error, success: false });
  }
};
