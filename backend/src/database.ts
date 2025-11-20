import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import { CartItem } from "./entities/CartItem";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "admin",
    database: process.env.DB_NAME || "shopping_cart",
    synchronize: true, // use migrations in prod
    logging: false,
    entities: [Product, CartItem],
});
