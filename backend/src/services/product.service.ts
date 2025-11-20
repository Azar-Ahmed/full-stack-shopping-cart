import { AppDataSource } from "../database";
import { Product } from "../entities/Product";
import { AppError } from "../middlewares/error.middleware";

export const ProductService = {
    async getAll() {
        try {
            return await AppDataSource.getRepository(Product).find();
        } catch (err) {
            throw new AppError("Failed to fetch products", 500);
        }
    },

    async create(productData: Partial<Product>) {
        try {
            const repo = AppDataSource.getRepository(Product);
            const product = repo.create(productData);
            return await repo.save(product);
        } catch (err) {
            throw new AppError("Failed to create product", 500);
        }
    }
};
