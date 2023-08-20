import { Request, Response } from "express";
import PostQuestions from "../models/postQuestions";
import { postQuestionValidation } from "../validations/postQuestionValidation";
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_CODE,
  OK,
  QUESTION_POSTED_SUCCESSFULLY,
} from "../constants";
import { IQuestionsModule } from "../types/global.type";

export const postQuestions = async (req: Request, res: Response) => {
  try {
    const payload = req.body as IQuestionsModule;

    const { error } = postQuestionValidation.validate({ ...payload });
    if (error) {
      return res.status(BAD_REQUEST).json({ message: error.message, success: false });
    }

    const newQuestionModule = new PostQuestions({ ...payload });
    const isPosted = await newQuestionModule.save();
    if (isPosted) {
      return res.status(OK).json({ message: QUESTION_POSTED_SUCCESSFULLY, success: true });
    }

    return res.status(BAD_REQUEST).json({ message: "Something went wrong", success: false });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR, error, success: false });
  }
};
