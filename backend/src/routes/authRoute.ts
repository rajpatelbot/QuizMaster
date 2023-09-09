import { Router } from "express";
import { getUserById, login, signup } from "../controllers/userController";
import multer from "multer";

const userRoutes = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

userRoutes.post("/signup", upload.single("profile"), signup);
userRoutes.post("/login", login);
userRoutes.get("/getUserById/:id", getUserById);

export default userRoutes;
