import jwt, { SignOptions } from "jsonwebtoken";
import { IUser } from "../types/global.type";
import { JWT_SECRET_KEY } from "../config/env";
import { IwebToken, JWT } from "./types";
import { JWT_EXPIRES_IN } from "../constants";

export const webToken: IwebToken = (id: string, email: Partial<IUser>): string => {
  const payload = { id, email };

  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN,
  };

  const jwtInstance = jwt as JWT;

  const token: string = jwtInstance.sign(payload, JWT_SECRET_KEY, options);

  return token;
};
