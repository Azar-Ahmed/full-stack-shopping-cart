import { AppDataSource } from "../database";
import { CartItem } from "../entities/CartItem";
import { AppError } from "../middlewares/error.middleware";

export const CartService = {
    async getAll() {
        const items = await AppDataSource.getRepository(CartItem).find();
        const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + item.quantity * parseFloat(item.product.price.toString()), 0);
        return { items, totalQty, totalPrice };
    },

    async addOrUpdate(itemData: Partial<CartItem>) {
        const repo = AppDataSource.getRepository(CartItem);
        let item = await repo.findOne({ where: { productId: itemData.productId } });
        if (item) {
            item.quantity += itemData.quantity!;
        } else {
            item = repo.create(itemData);
        }
        return await repo.save(item);
    },

    async remove(id: number) {
        const repo = AppDataSource.getRepository(CartItem);
        const item = await repo.findOne({ where: { id } });
        if (!item) throw new AppError("Cart item not found", 404);
        return await repo.remove(item);
    }
};
