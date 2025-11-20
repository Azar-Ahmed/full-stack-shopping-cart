import { Request, Response, NextFunction } from "express";
import { CartService } from "../services/cart.service";
import { validate } from "class-validator";
import { CreateCartItemDto } from "../dtos/createCartItem.dto";
import { plainToClass } from "class-transformer";
import { AppError } from "../middlewares/error.middleware";

export const CartController = {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const cart = await CartService.getAll();
            res.json(cart);
        } catch (err) {
            next(err); // Pass error to global error handler
        }
    },

    async add(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = plainToClass(CreateCartItemDto, req.body);
            const errors = await validate(dto);
            if (errors.length) return next(new AppError("Validation failed", 400));

            const item = await CartService.addOrUpdate(dto);
            res.json(item);
        } catch (err) {
            next(err); // Pass error to global error handler
        }
    },

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) return next(new AppError("Invalid ID", 400));

            await CartService.remove(id);
            res.json({ message: "Cart item removed" });
        } catch (err) {
            next(err); // Pass error to global error handler
        }
    }
};
