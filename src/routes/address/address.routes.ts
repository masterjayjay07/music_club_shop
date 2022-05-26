import { Router } from "express";
import addressCreateController from "../../controllers/address/addressCreate.controller";
import addressDeleteController from "../../controllers/address/addressDelete.controller";
import addressListController from "../../controllers/address/addressListController";
import addressListOneController from "../../controllers/address/addressListOneController";
import addressUpdateController from "../../controllers/address/addressUpdate.controller";

import authTokenMiddleware from "../../middlewares/authToken.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import verifyIfItsAdmOrOwnerMiddleware from "../../middlewares/verifyIfItsAdmOrOwner.middleware";

const addressRoutes = Router();

addressRoutes.post("/", authTokenMiddleware, addressCreateController);

addressRoutes.get(
  "/",
  authTokenMiddleware,
  verifyAdminMiddleware,
  addressListController
);

addressRoutes.get(
  "/:user_id",
  authTokenMiddleware,
  verifyIfItsAdmOrOwnerMiddleware,
  addressListOneController
);

addressRoutes.patch(
  "/:id",
  authTokenMiddleware,
  verifyAdminMiddleware,
  addressUpdateController
);

addressRoutes.delete(
  "/:id",
  authTokenMiddleware,
  verifyAdminMiddleware,
  addressDeleteController
);

export default addressRoutes;
