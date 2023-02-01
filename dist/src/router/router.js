"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_router_1 = require("./product-router");
const user_router_1 = require("./user-router");
const auth_router_1 = require("./auth-router");
const auth_1 = require("../middleware/auth");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', auth_router_1.authRouter);
exports.router.use(auth_1.auth);
exports.router.use('/products', product_router_1.productRouter);
exports.router.use('/users', user_router_1.userRouter);
//# sourceMappingURL=router.js.map