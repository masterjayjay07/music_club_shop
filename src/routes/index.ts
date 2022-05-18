import { Request, Response, Router } from "express";
import addressRoutes from "./address/address.routes";
import userRoutes from "./user/user.routes";

const router = Router();

router.use("/address", addressRoutes);
router.use("/users", userRoutes);

router.get("", (req: Request, res: Response) => {
  res.send("Está rodando no docker");
});

export default router;
