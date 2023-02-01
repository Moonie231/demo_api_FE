import { Request, Response } from "express";
declare module "express-session" {
    interface SessionData {
        User: {
            [key: string]: any;
        };
    }
}
declare class UserController {
    private userService;
    constructor();
    orderProduct: (req: Request, res: Response) => Promise<void>;
    showFormCart: (req: Request, res: Response) => Promise<void>;
    searchProduct: (req: Request, res: Response) => Promise<void>;
    payOrder: (req: Request, res: Response) => Promise<void>;
    priceRange: (req: Request, res: Response) => Promise<void>;
    deleteCart: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
