import { Router } from "express";
import AuthController from "../controller/AuthController";

export const authRouter = Router()

authRouter.post('/register', AuthController.register)
authRouter.post('/login', AuthController.login)