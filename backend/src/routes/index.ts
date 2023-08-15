import { Router } from "express";
import userRoutes from "./authRoute";
import postQuestionRoute from "./quesModuleRoute";

const allRoutes = Router();

allRoutes.use("/user", userRoutes);

allRoutes.use("/api", postQuestionRoute);

export default allRoutes;
