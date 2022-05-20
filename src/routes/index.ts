import { Router } from "express";
import cartRouter from "./cart";
import productRouter from "./product";
import addressRoutes from "./address/address.routes";
import userRoutes from "./user/user.routes";

const router = Router();

router.use("/address", addressRoutes);
router.use("/users", userRoutes);
router.use("/products", productRouter);
router.use("/cart", cartRouter);

export default router;
