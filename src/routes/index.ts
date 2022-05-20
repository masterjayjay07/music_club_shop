import orderRouter from "./order/";
import productRouter from "./product";
import { Router } from "express";
import addressRoutes from "./address/address.routes";
import userRoutes from "./user/user.routes";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import cartRouter from "./cart";

const router = Router();
router.use("/users", userRoutes);
router.use("/products", productRouter);
 
router.use(authTokenMiddleware)
router.use("/cart",cartRouter)
router.use("/address", addressRoutes);
router.use("/orders", orderRouter);
export default router;
