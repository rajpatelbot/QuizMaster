import { Router } from "express";
import userRoutes from "./auth";

const allRoutes = Router();

allRoutes.use("/user", userRoutes);

export default allRoutes;
