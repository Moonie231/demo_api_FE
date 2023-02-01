import { Router } from 'express';
import userController from "../controller/UserController";

export const userRouter = Router();

userRouter.get('/cart', userController.showFormCart);
userRouter.get('/search-product', userController.searchProduct);
userRouter.get('/price-range', userController.priceRange);
userRouter.post('/order/:id', userController.orderProduct);
userRouter.get('/pay-orders', userController.payOrder);
userRouter.post('/delete/:id', userController.deleteCart);