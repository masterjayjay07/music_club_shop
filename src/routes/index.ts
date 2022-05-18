import { Router } from "express";
import userRoutes from "./user/user.routes";

const routes = Router();

routes.use("/users", userRoutes);

export default routes;
