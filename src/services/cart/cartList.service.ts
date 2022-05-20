import AppDataSource from "../../data-source";
import Cart from "../../entities/cart.entity";

const cartListService = async () => {
  const cartRepository = AppDataSource.getRepository(Cart);

  const carts = cartRepository.find();

  return carts;
};

export default cartListService;
