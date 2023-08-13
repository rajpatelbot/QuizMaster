import { Request, Response } from "express";

export const postQuestionController = (req: Request, res: Response) => {
  return res.json({ message: "Hello from postQuestionController" });
};
