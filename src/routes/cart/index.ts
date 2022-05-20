import { Router } from "express";
import addCartController from "../../controllers/cart/addCart.controller";
import cartUpdateController from "../../controllers/cart/cartUpdate.controller";
import cartListController from "../../controllers/cart/cartList.controller";
import cartRemove from "../../controllers/cart/cartRemove.controller"

const cartRouter = Router()

cartRouter.post('/',addCartController)
cartRouter.get('/',cartListController)
cartRouter.patch('/:cartProdId',cartUpdateController)
cartRouter.delete('/:cartProdId',cartRemove)

export default cartRouter
