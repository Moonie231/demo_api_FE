import { Router } from "express";
import homeController from "../controller/HomeController";
import userController from "../controller/UserController";
import { productRouter } from './product-router';
import { userRouter } from "./user-router";

export const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);