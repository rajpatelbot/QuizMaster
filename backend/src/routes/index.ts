import { Router } from "express";
import userRoutes from "./authRoute";
import questionModuleRoute from "./quesModuleRoute";

const allRoutes = Router();

allRoutes.use("/user", userRoutes);

allRoutes.use("/api", questionModuleRoute);

export default allRoutes;
