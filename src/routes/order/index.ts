import { Router } from "express";
import orderListController from "../../controllers/order/listOrder.controller";
import createOrderController from "../../controllers/order/createOrder.controller";
import orderDeleteController from "../../controllers/order/deleteOrder.controller";
import orderListOneController from "../../controllers/order/listOneOrder.controller";
import orderUpdateController from "../../controllers/order/updateOrder.controller";
import orderListOneUserController from "../../controllers/order/listOrderOneUser.controller";
import orderListProfileController from "../../controllers/order/listOrderProfile.controller";

import { expressYupMiddleware } from "express-yup-middleware";
import validatorOrderCreate from "../../schemas/order/create.validation";
import validatorOrderUpdate from "../../schemas/order/update.validation";

import verifyTokenAuthenticationMiddleware from "../../middlewares/authToken.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import verifyIfItsAdmOrOwnerOrderMiddleware from "../../middlewares/verifyIfItsAdmOrOwnerOrder.middleware";
const orderRouter = Router();

orderRouter.get(
  "/",
  verifyTokenAuthenticationMiddleware,
  verifyAdminMiddleware,
  orderListController
);
orderRouter.post(
  "/",
  verifyTokenAuthenticationMiddleware,
  expressYupMiddleware({ schemaValidator: validatorOrderCreate }),
  createOrderController
);
orderRouter.get(
  "/profile",
  verifyTokenAuthenticationMiddleware,
  orderListProfileController
);
orderRouter.get(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyIfItsAdmOrOwnerOrderMiddleware,
  orderListOneController
);
orderRouter.delete(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyIfItsAdmOrOwnerOrderMiddleware,
  orderDeleteController
);
orderRouter.patch(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyIfItsAdmOrOwnerOrderMiddleware,
  expressYupMiddleware({ schemaValidator: validatorOrderUpdate }),
  orderUpdateController
);
orderRouter.get("/listuserorder/:userId", orderListOneUserController);

export default orderRouter;
