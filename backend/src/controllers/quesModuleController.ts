import { Request, Response } from "express";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import PostQuestions from "../models/postQuestions";
import { postQuestionValidation } from "../validations/postQuestionValidation";
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  INTERNAL_SERVER_ERROR_CODE,
  NO_DATA_FOUND,
  OK,
  QUESTION_POSTED_SUCCESSFULLY,
  SOMETHING_WENT_WRONG,
} from "../constants";
import { IQuestionsModule } from "../types/global.type";
import { IControllerFnReturn } from "./types";
import { storage } from "../config/firebase.config";

export const postQuestions = async (req: Request, res: Response): IControllerFnReturn => {
  try {
    const payload = req.body as IQuestionsModule;

    const questionImages: string[] = [];

    try {
      for (const file of req.files as Express.Multer.File[]) {
        const dateTime = new Date().toISOString().replace(/:/g, "-");
        const storageRef = ref(storage, `questionImages/${dateTime}-${file.originalname}`);

        const metaData = {
          contentType: file.mimetype,
        };

        const snapshot = await uploadBytes(storageRef, file.buffer, metaData);
        const downloadURL = await getDownloadURL(snapshot.ref);

        questionImages.push(downloadURL);
      }

      const updatedQuestions = payload.questions?.map((question, index) => ({
        ...question,
        questionImage: questionImages[index],
        correctAnswer: question.correctAnswer.trim(),
        options: question.options.map((option) => option.trim()),
      }));

      const totalPoint = payload.questions?.reduce((acc, curr) => acc + curr.point, 0);
      const newQuestionModule = { ...payload, questions: updatedQuestions, totalPoint };

      const { error } = postQuestionValidation.validate({ ...newQuestionModule });
      if (error) {
        return res.status(BAD_REQUEST).json({ message: error.message, success: false });
      }

      const isPosted = await PostQuestions.create(newQuestionModule);
      if (isPosted) {
        return res.status(OK).json({ message: QUESTION_POSTED_SUCCESSFULLY, success: true });
      }

      return res.status(BAD_REQUEST).json({ message: SOMETHING_WENT_WRONG, success: false });
    } catch (error) {
      return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR, error, success: false });
    }
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR_CODE).json({ message: INTERNAL_SERVER_ERROR, error, success: false });
  }
};

export const getAllQuestionsModules = async (_: Request, res: Response): IControllerFnReturn => {
  const getAllQuestionsModules = await PostQuestions.find().populate("createdBy", "-password");
  if (getAllQuestionsModules) {
    return res.status(OK).json({ data: getAllQuestionsModules, success: true });
  } else {
    return res.status(BAD_REQUEST).json({ message: SOMETHING_WENT_WRONG, success: false });
  }
};

export const getQuestionsModuleById = async (req: Request, res: Response): IControllerFnReturn => {
  const { id } = req.params;

  const getQuestionsModuleById = await PostQuestions.find({ createdBy: id }).populate("createdBy", "-password");
  if (getQuestionsModuleById) {
    return res.status(OK).json({ data: getQuestionsModuleById, success: true });
  } else {
    return res.status(OK).json({ message: NO_DATA_FOUND, success: true });
  }
};

export const deleteQuestionsModuleById = async (req: Request, res: Response): IControllerFnReturn => {
  const { id } = req.params;
  const deleteQuestionsModuleById = await PostQuestions.findByIdAndDelete(id);

  if (deleteQuestionsModuleById) {
    return res.status(OK).json({ message: "Question Module Deleted Successfully", success: true });
  } else {
    return res.status(BAD_REQUEST).json({ message: SOMETHING_WENT_WRONG, success: false });
  }
};
