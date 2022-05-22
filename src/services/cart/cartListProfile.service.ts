import AppDataSource from "../../data-source";
import Cart from "../../entities/cart.entity";
import { AppError } from "../../errors/AppError";

const cartListOneService = async (id: string) => {
  const cartRepository = AppDataSource.getRepository(Cart);

  const cart = await cartRepository.findOne({ where: { userId:id } });

  if (!cart) {
    throw new AppError(509, "Cart does not exist");
  }

  return cart;
};

export default cartListOneService;
