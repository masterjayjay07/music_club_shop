import { Router } from "express";
import orderListOneController from "../../controllers/order/listOneOrder.controller";
import orderListController from "../../controllers/order/listOrder.controller";
import authTokenMiddleware from "../../middlewares/authToken.middleware";
import cartAddProdController from "../../controllers/order/cartAddProducts.controller";
import cartDeleteProdController from "../../controllers/order/cartDeleteProducts.controller";

const orderRouter = Router();

orderRouter.get("/", authTokenMiddleware, orderListController);
orderRouter.get("/:id", orderListOneController);
orderRouter.post("/cart", cartAddProdController);
orderRouter.delete("/cart/:product_id", cartDeleteProdController);

export default orderRouter;
