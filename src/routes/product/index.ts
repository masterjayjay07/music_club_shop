import { Router } from "express";
import createProductController from "../../controllers/product/createProduct.controller";
import listProductsController from "../../controllers/product/listAllProducts.controller";
import listOneProductController from "../../controllers/product/listOneProduct.controller";
import updateProductController from "../../controllers/product/updateProduct.controller";
import deleteProductController from "../../controllers/product/deleteProduct.controller";

const productRouter = Router();

productRouter.post("", createProductController);
productRouter.get("/", listProductsController);
productRouter.get("/:id", listOneProductController);
productRouter.patch("/:id", updateProductController);
productRouter.delete("/:id", deleteProductController);

export default productRouter;
