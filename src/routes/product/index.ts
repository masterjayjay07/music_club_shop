import { Router } from "express";
import createProductController from "../../controllers/product/createProduct.controller";
import listProductsController from "../../controllers/product/listAllProducts.controller";
import listOneProductController from "../../controllers/product/listOneProduct.controller";
import updateProductController from "../../controllers/product/updateProduct.controller";
import deleteProductController from "../../controllers/product/deleteProduct.controller";
import { expressYupMiddleware } from "express-yup-middleware";
import validatorProductCreate from "../../schemas/product/create.validation";
import validatorProductUpdate from "../../schemas/product/update.validation";

import verifyTokenAuthenticationMiddleware from "../../middlewares/authToken.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";

const productRouter = Router();

productRouter.post(
  "/",
  verifyTokenAuthenticationMiddleware,
  verifyAdminMiddleware,
  expressYupMiddleware({ schemaValidator: validatorProductCreate }),
  createProductController
);
productRouter.get("/", listProductsController);
productRouter.get("/:id", listOneProductController);
productRouter.patch(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyAdminMiddleware,
  expressYupMiddleware({ schemaValidator: validatorProductUpdate }),
  updateProductController
);
productRouter.delete(
  "/:id",
  verifyTokenAuthenticationMiddleware,
  verifyAdminMiddleware,
  deleteProductController
);

export default productRouter;
