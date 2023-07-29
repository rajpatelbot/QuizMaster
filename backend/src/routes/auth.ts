import { Router } from "express";
import { signup } from "../controllers/userController";

const userRoutes = Router();

userRoutes.post("/signup", signup);

export default userRoutes;
