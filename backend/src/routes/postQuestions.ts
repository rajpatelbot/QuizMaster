import { postQuestionController } from "./../controllers/postQuestionsController";
import { Router } from "express";
import { userAuthMiddleware } from "../middlewares/userAuth";

const postQuestion = Router();

postQuestion.post("/post-questions", userAuthMiddleware, postQuestionController);

export default postQuestion;
