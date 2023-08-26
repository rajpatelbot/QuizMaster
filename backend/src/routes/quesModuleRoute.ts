import { Router } from "express";
import { userAuthMiddleware } from "../middlewares/userAuth";
import { getAllQuestionsModules, postQuestions } from "../controllers/quesModuleController";

const questionModuleRoute = Router();

questionModuleRoute.post("/post-questions", userAuthMiddleware, postQuestions);

questionModuleRoute.get("/get-questions-modules", getAllQuestionsModules);

export default questionModuleRoute;
