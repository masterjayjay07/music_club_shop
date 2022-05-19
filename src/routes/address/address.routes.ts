import { Router } from "express";

import addressCreateController from "../../controllers/address/addressCreate.controller";
import addressDeleteController from "../../controllers/address/addressDelete.controller";
import addressListController from "../../controllers/address/addressListController";
import addressListOneController from "../../controllers/address/addressListOneController";
import addressUpdateController from "../../controllers/address/addressUpdate.controller";

const addressRoutes = Router();

addressRoutes.post("/", addressCreateController);
addressRoutes.get("/", addressListController);
addressRoutes.get("/:user_id", addressListOneController);
addressRoutes.patch("/:id", addressUpdateController);
addressRoutes.delete("/:id", addressDeleteController);

export default addressRoutes;
