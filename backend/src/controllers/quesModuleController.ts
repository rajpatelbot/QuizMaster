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
import { IControllerFnReturn } from "./types";

export const postQuestions = async (req: Request, res: Response): IControllerFnReturn => {
  try {
    const payload = req.body as IQuestionsModule;

    const { error } = postQuestionValidation.validate({ ...payload });
    if (error) {
      return res.status(BAD_REQUEST).json({ message: error.message, success: false });
    }

    const totalPoint = payload.questions.reduce((acc, curr) => acc + curr.point, 0);

    const newQuestion: IQuestionsModule = { ...payload, totalPoint };

    const newQuestionModule = new PostQuestions(newQuestion);
    const isPosted = await newQuestionModule.save();
    if (isPosted) {
      return res.status(OK).json({ message: QUESTION_POSTED_SUCCESSFULLY, success: true });
    }

    return res.status(BAD_REQUEST).json({ message: "Something went wrong", success: false });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR, error, success: false });
  }
};

export const getAllQuestionsModules = async (_: Request, res: Response): IControllerFnReturn => {
  const getAllQuestionsModules = await PostQuestions.find();
  if (getAllQuestionsModules) {
    return res.status(OK).json({ data: getAllQuestionsModules, success: true });
  } else {
    return res.status(BAD_REQUEST).json({ message: "Something went wrong", success: false });
  }
};
