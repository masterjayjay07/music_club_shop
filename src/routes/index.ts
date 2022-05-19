import orderRouter from "./order/";
import productRouter from "./product";
import { Request, Response, Router } from "express";
import { addressRoutes } from "./address/address.route";
import userRoutes from "./user/user.routes";

const router = Router();
router.use("/address", addressRoutes());
router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
export default router;
