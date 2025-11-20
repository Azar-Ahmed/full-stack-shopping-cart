import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import cors from "cors";
import { AppDataSource } from "./database";
import productRoutes from "./routes/product.routes";
import cartRoutes from "./routes/cart.routes";
import { errorHandler } from "./middlewares/error.middleware";
dotenv.config();
const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // only allow frontend
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
}));
app.use(express.json());

// Routes
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.use(errorHandler);

// Port
const PORT = process.env.PORT || 5000;

// Database initialization & server start
AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("Database connection failed:", err));
