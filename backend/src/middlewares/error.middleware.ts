import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Global error handler middleware
export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err); // log error for debugging

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    // Default 500 Internal Server Error
    res.status(500).json({ message: "Internal Server Error" });
};
