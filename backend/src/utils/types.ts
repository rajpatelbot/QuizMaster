import jwt, { SignOptions } from "jsonwebtoken";
import { IUser } from "../types/global.type";

export interface JWT {
  sign(payload: string | object | Buffer, secretOrPrivateKey: jwt.Secret, options?: SignOptions): string;
}

export interface IwebToken {
  (id: string, email: Partial<IUser>): string;
}
