import { Router } from "express";
import cartRouter from "./cart";
import productRouter from "./product";
import addressRoutes from "./address/address.routes";
import userRoutes from "./user/user.routes";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const router = Router();

router.use("/address", addressRoutes);
router.use("/users", userRoutes);
router.use("/products", productRouter);
router.use("/cart", cartRouter);
router.use(authTokenMiddleware);

export default router;
