import { Router } from "express";
import userRoutes from "./auth";
import postQuestion from "./postQuestions";

const allRoutes = Router();

allRoutes.use("/user", userRoutes);

allRoutes.use("/api", postQuestion);

export default allRoutes;
