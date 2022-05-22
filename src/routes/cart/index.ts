import { Router } from "express";
import addCartController from "../../controllers/cart/addCart.controller";
import cartUpdateController from "../../controllers/cart/cartUpdate.controller";
import cartListController from "../../controllers/cart/cartList.controller";
import cartRemove from "../../controllers/cart/cartRemove.controller";
import cartListOneController from "../../controllers/cart/cartListOne.controller";
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
cartRouter.get("/profile", authTokenMiddleware, 
verifyAdminMiddleware,
cartListProfileController);

cartRouter.get(
  "/:id",
  authTokenMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  cartListOneController
);
cartRouter.patch(
  "/:cartProdId",
  authTokenMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  cartUpdateController
);
cartRouter.delete(
  "/:cartProdId",
  authTokenMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  cartRemove
);

export default cartRouter;
