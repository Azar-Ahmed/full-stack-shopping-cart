import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/product.service";
import { AppError } from "../middlewares/error.middleware";

export const ProductController = {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await ProductService.getAll();
            res.json(products);
        } catch (err) {
            next(err); // Pass error to global error handler
        }
    }
};
