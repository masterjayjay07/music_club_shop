import { Request, Response, Router } from "express";
import { addressRoutes } from "./address/address.route";

const router = Router();
router.use("/address", addressRoutes());

router.get("", (req: Request, res: Response) => {
  res.send("Está rodando no docker");
});

export default router;
