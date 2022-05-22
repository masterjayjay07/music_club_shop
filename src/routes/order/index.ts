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
import verifyIfItsAdmOrOwnerMiddleware from "../../middlewares/verifyIfItsAdmOrOwner.middleware";

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
  verifyIfItsAdmOrOwnerMiddleware,
  orderListOneController
);
orderRouter.delete(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  orderDeleteController
);
orderRouter.patch(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  expressYupMiddleware({ schemaValidator: validatorOrderUpdate }),
  orderUpdateController
);
orderRouter.get("/listuserorder/:userId", orderListOneUserController);

export default orderRouter;
