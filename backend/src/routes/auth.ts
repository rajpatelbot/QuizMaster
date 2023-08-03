import { Router } from "express";
import { login, signup } from "../controllers/userController";

const userRoutes = Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

export default userRoutes;
