import { Router } from "express";
import multer from "multer";
const upload = multer({ dest: "uploads/profiles" });
import { login, signup } from "../controllers/userController";

const userRoutes = Router();

userRoutes.post("/signup", upload.single("profile"), signup);
userRoutes.post("/login", login);

export default userRoutes;
