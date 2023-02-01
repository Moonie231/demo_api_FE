"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("../service/AuthService"));
class AuthController {
    constructor() {
        this.register = async (req, res) => {
            let user = await this.AuthService.register(req.body);
            res.status(201).json(user);
        };
        this.login = async (req, res) => {
            let user = {
                email: req.body.email,
                password: req.body.password
            };
            let response = await this.AuthService.checkUser(user);
            res.status(200).json(response);
        };
        this.AuthService = AuthService_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=AuthController.js.map