import { Router } from "express";
import cartListOneService from "../../services/cart/cartListOne.service";
import cartListService from "../../services/cart/cartList.service";
import authTokenMiddleware from "../../middlewares/authToken.middleware";
import cartAddProdController from "../../controllers/cart/cartAddProducts.controller";
import cartDeleteProdController from "../../controllers/cart/cartDeleteProducts.controller";

const cartRouter = Router();

cartRouter.get("/", authTokenMiddleware, cartListService);
cartRouter.get("/:id", cartListOneService);
cartRouter.post("/add", cartAddProdController);
cartRouter.delete("/del/:product_id", cartDeleteProdController);

export default cartRouter;
