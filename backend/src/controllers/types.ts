import { Response } from "express";

export type IAuthFnReturn = Promise<Response<number, Record<string, boolean>>>;
