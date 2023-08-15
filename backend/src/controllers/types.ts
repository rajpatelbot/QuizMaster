import { Response } from "express";

export type IControllerFnReturn = Promise<Response<number, Record<string, boolean>>>;
