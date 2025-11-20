import "reflect-metadata";
import { AppDataSource } from "./database";
import { Product } from "./entities/Product";

const sampleProducts = [
    { name: "Apple iPhone 15", price: 999.99, image: "https://via.placeholder.com/150" },
    { name: "Samsung Galaxy S23", price: 899.99, image: "https://via.placeholder.com/150" },
    { name: "Sony WH-1000XM5 Headphones", price: 349.99, image: "https://via.placeholder.com/150" },
    { name: "Dell XPS 15 Laptop", price: 1499.99, image: "https://via.placeholder.com/150" },
    { name: "Amazon Echo Dot", price: 49.99, image: "https://via.placeholder.com/150" },
];

async function seed() {
    try {
        await AppDataSource.initialize();
        const repo = AppDataSource.getRepository(Product);

        for (const product of sampleProducts) {
            const existing = await repo.findOne({ where: { name: product.name } });
            if (!existing) {
                const newProduct = repo.create(product);
                await repo.save(newProduct);
            }
        }

        console.log("Database seeded successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Seeding failed:", err);
        process.exit(1);
    }
}

seed();
