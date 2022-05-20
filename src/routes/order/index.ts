import { Router } from "express";

import orderListController from "../../controllers/order/listOrder.controller";
import createOrderController from "../../controllers/order/createOrder.controller";
import orderDeleteController from "../../controllers/order/deleteOrder.controller";
import orderListOneController from "../../controllers/order/listOneOrder.controller";
import orderUpdateController from "../../controllers/order/updateOrder.controller";
import orderListOneUserController from "../../controllers/order/listOrderOneUser.controller";

//import verifyAdmIsOwnerMiddleware from "../../middlewares/verifyAdmIsOwner.middleware";
//import authTokenMiddleware from "../../middlewares/authToken.middleware";

const orderRouter = Router();

orderRouter.get("/", orderListController);
orderRouter.post("/", createOrderController);
orderRouter.get("/:id", orderListOneController);
orderRouter.delete("/:id", orderDeleteController);
orderRouter.patch("/:id", orderUpdateController);
orderRouter.get("/listuserorder/:userId", orderListOneUserController);

export default orderRouter;