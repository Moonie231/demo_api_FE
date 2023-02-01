"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controller/AuthController"));
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/register', AuthController_1.default.register);
exports.authRouter.post('/login', AuthController_1.default.login);
//# sourceMappingURL=auth-router.js.map