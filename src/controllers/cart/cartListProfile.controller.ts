import { Request, Response } from "express";
import cartListProfile from "../../services/cart/cartListProfile.service";
import { AppError, handleError } from "../../errors/AppError";

const cartListProfileController = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;

    const cart = await cartListProfile(userId);

    return res.send(cart);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default cartListProfileController;
