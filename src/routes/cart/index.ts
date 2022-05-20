import { Router } from "express";
import authTokenMiddleware from "../../middlewares/authToken.middleware";
import cartAddProdController from "../../controllers/cart/cartAddProducts.controller";
import cartDeleteProdController from "../../controllers/cart/cartDeleteProducts.controller";
import cartListController from "../../controllers/cart/cartList.controller";
import cartListOneController from "../../controllers/cart/cartListOne.controller";

const cartRouter = Router();

cartRouter.get("/", authTokenMiddleware, cartListController);
cartRouter.get("/:id", cartListOneController);
cartRouter.post("/add", cartAddProdController);
cartRouter.delete("/del/:product_id", cartDeleteProdController);

export default cartRouter;
