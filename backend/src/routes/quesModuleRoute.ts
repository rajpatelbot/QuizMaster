import { Router } from "express";
import multer from "multer";

import { userAuthMiddleware } from "../middlewares/userAuth";
import {
  deleteQuestionsModuleById,
  getAllQuestionsModules,
  getQuestionsModuleById,
  postQuestions,
} from "../controllers/quesModuleController";

const questionModuleRoute = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

questionModuleRoute.post("/post-questions", userAuthMiddleware, upload.any(), postQuestions);
questionModuleRoute.get("/get-questions-modules", getAllQuestionsModules);
questionModuleRoute.get("/get-questions-modules/:id", getQuestionsModuleById);
questionModuleRoute.delete("/delete-questions-modules/:id", userAuthMiddleware, deleteQuestionsModuleById);

export default questionModuleRoute;
