import { Router } from "express";
import { userAuthMiddleware } from "../middlewares/userAuth";
import {
  deleteQuestionsModuleById,
  getAllQuestionsModules,
  getQuestionsModuleById,
  postQuestions,
} from "../controllers/quesModuleController";

const questionModuleRoute = Router();

questionModuleRoute.post("/post-questions", userAuthMiddleware, postQuestions);

questionModuleRoute.get("/get-questions-modules", getAllQuestionsModules);

questionModuleRoute.get("/get-questions-modules/:id", getQuestionsModuleById);

questionModuleRoute.delete("/delete-questions-modules/:id", userAuthMiddleware, deleteQuestionsModuleById);

export default questionModuleRoute;
