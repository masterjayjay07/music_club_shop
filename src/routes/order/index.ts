import { Router } from "express";
import createOrderController from "../../controllers/order/createOrder.controller";
import orderListOneController from "../../controllers/order/listOneOrder.controller";
import orderListController from "../../controllers/order/listOrder.controller";
import orderListOneUserController from "../../controllers/order/listOrderOneUser.controller";
import orderUpdateController from "../../controllers/order/updateOrder.controller";

const orderRouter = Router();

orderRouter.get("/", orderListController);
orderRouter.post("/", createOrderController);
orderRouter.get("/:id", orderListOneController);
orderRouter.delete("/:id");
orderRouter.patch("/:id", orderUpdateController);
orderRouter.get("/listuserorder/:userId", orderListOneUserController);

export default orderRouter;
