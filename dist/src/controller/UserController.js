"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
const ProductService_1 = __importDefault(require("../service/ProductService"));
class UserController {
    constructor() {
        this.orderProduct = async (req, res) => {
            if (req.session.User) {
                let user = await this.userService.findById(req.session.User);
                let product = await ProductService_1.default.findById(req.params.id);
                let cart = await this.userService.orderProduct(+req.body.quantity, req.params.id, req.session.User);
                res.redirect(301, '/home-customer');
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.showFormCart = async (req, res) => {
            if (req.session.User) {
                let cart = await UserService_1.default.findCartByUser(req.session.User);
                let sum = 0;
                let paid = 0;
                for (let i = 0; i < cart.length; i++) {
                    let product = await ProductService_1.default.findById(cart[i].product);
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
        };
        this.searchProduct = async (req, res) => {
            let products = await ProductService_1.default.search(req.query.keyword);
            res.status(200).json(products);
        };
        this.payOrder = async (req, res) => {
            if (req.session.User) {
                await UserService_1.default.changeStatusCart(req.session.User);
                res.redirect(301, '/users/cart');
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.priceRange = async (req, res) => {
            let products = await ProductService_1.default.priceRange(+req.query.keyword);
            res.status(200).json(products);
        };
        this.deleteCart = async (req, res) => {
            if (req.session.User) {
                let id = req.params.id;
                await this.userService.removeCart(id);
                res.redirect(301, '/users/cart');
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map