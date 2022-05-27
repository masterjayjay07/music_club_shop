import { Router } from "express";

import addCartController from "../../controllers/cart/addCart.controller";
import cartListController from "../../controllers/cart/cartList.controller";
import cartListOneController from "../../controllers/cart/cartListOne.controller";

import cartRemoveOne from "../../controllers/cart/cartRemoveOne.controller";
import removeCartController from "../../controllers/cart/cartRemove.controller";

import authTokenMiddleware from "../../middlewares/authToken.middleware";
import cartListProfileController from "../../controllers/cart/cartListProfile.controller";

import { expressYupMiddleware } from "express-yup-middleware";
import validatorCartAdd from "../../schemas/cart/create.validation";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import verifyIfItsAdmOrOwnerMiddleware from "../../middlewares/verifyIfItsAdmOrOwner.middleware";

const cartRouter = Router();

cartRouter.post(
  "/",
  authTokenMiddleware,
  expressYupMiddleware({ schemaValidator: validatorCartAdd }),
  addCartController
);
cartRouter.get(
  "/",
  authTokenMiddleware,
  verifyAdminMiddleware,
  cartListController
);
cartRouter.get("/profile", authTokenMiddleware, cartListProfileController);

cartRouter.get(
  "/:id",
  authTokenMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  cartListOneController
);
cartRouter.delete(
  "/:cartProdId",
  authTokenMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  cartRemoveOne
);

cartRouter.delete(
  "/removeProd/:cartProdId",
  authTokenMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  removeCartController
);

export default cartRouter;
