import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private categoryService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    search: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
