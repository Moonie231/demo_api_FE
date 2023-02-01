import { Router } from "express";
import homeController from "../controller/ProductController";
import userController from "../controller/UserController";
import { productRouter } from './product-router';
import { userRouter } from "./user-router";
import {authRouter} from "./auth-router";
import {auth} from "../middleware/auth";

export const router = Router();
router.use('/auth', authRouter)
router.use(auth)

router.use('/products', productRouter);
router.use('/users', userRouter);