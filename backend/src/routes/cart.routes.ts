import { Router } from "express";
import { CartController } from "../controllers/cart.controller";

const router = Router();
router.get("/cart", CartController.getAll);
router.post("/cart", CartController.add);
router.delete("/cart/:id", CartController.remove);

export default router;
