import { Router } from "express";
import addressCreateController from "../../controllers/address/addressCreate.controller";

const routes = Router();

export const addressRoutes = () => {
  routes.post("/", addressCreateController);
  return routes;
};
