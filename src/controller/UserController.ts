import { Request, Response } from "express";
import userService from '../service/UserService';
import productService from '../service/ProductService';

import bcrypt from 'bcrypt';

declare module "express-session" {
    interface SessionData {
        User: { [key: string]: any }
    }
}

class UserController {
    private userService;
    constructor() {
        this.userService = userService;
    }



    orderProduct = async (req: Request, res: Response) => {
        if (req.session.User) {
            let user = await this.userService.findById(req.session.User);
            let product = await productService.findById(req.params.id);
            let cart = await this.userService.orderProduct(+req.body.quantity, req.params.id, req.session.User);
            res.redirect(301, '/home-customer');
        }
        else {
            res.redirect(301, '/users/login');
        }
    }

    showFormCart = async (req: Request, res: Response) => {
        if (req.session.User) {
            let cart = await userService.findCartByUser(req.session.User);
            let sum = 0;
            let paid = 0;
            for (let i = 0; i < cart.length; i++) {
                let product = await productService.findById(cart[i].product);
                if (cart[i].status === 'buying') {
                    sum += cart[i].quantity * product.price;
                }
                else {
                    paid += cart[i].quantity * product.price;
                }
            }
            res.render('users/cart', { cart: cart, sum: sum, paid: paid });
        }
        else {
            res.redirect(301, '/users/login');
        }
    }

    searchProduct = async (req: Request, res: Response) => {
        let products = await productService.search(req.query.keyword);
        res.status(200).json(products);
    }

    payOrder = async (req: Request, res: Response) => {
        if (req.session.User) {
            await userService.changeStatusCart(req.session.User);
            res.redirect(301, '/users/cart');
        }
        else {
            res.redirect(301, '/users/login');
        }
    }

    priceRange = async (req: Request, res: Response) => {
        let products = await productService.priceRange(+req.query.keyword);
        res.status(200).json(products);
    }

    deleteCart = async (req: Request, res: Response) => {
        if (req.session.User) {
            let id = req.params.id;
            await this.userService.removeCart(id);
            res.redirect(301, '/users/cart');
        }
        else {
            res.redirect(301, '/users/login');
        }
    }
}

export default new UserController();