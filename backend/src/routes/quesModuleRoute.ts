import { Router } from "express";
import { userAuthMiddleware } from "../middlewares/userAuth";
import { postQuestions } from "../controllers/quesModuleController";

const postQuestionRoute = Router();

postQuestionRoute.post("/post-questions", userAuthMiddleware, postQuestions);

export default postQuestionRoute;
