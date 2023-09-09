import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/env";
import { INTERNAL_SERVER_ERROR_CODE, UNAUTHORIZED, UNAUTHORIZED_CODE } from "../constants";

interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

export const userAuthMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers["cookies"] as string;

  if (!token) {
    return res.status(UNAUTHORIZED_CODE).json({ message: UNAUTHORIZED, success: false });
  }

  try {
    const decodeToken = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;
    req.user = decodeToken;
    next();
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: error, success: false });
  }
};
