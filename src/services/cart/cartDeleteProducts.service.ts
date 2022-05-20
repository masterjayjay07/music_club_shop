import AppDataSource from "../../data-source";
import Cart from "../../entities/cart.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const cartDelProdService = async (userEmail: string, product_id: string) => {
  const fixedFloat = (value: number) => {
    return Number.parseFloat(value.toFixed(2));
  };
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  const cartRepository = AppDataSource.getRepository(Cart);

  const cart = await cartRepository.findOne({
    where: {
      id: user?.cart.id,
    },
  });

  if (cart) {
    if (cart.products.filter((prod) => prod.id === product_id).length === 0) {
      throw new AppError(404, "Product is not in the cart");
    }

    cart.products = cart.products.filter((prod) => prod.id !== product_id);
    cart.total = fixedFloat(
      cart.products.reduce((acc, prod) => acc + prod.price, 0)
    );

    await cartRepository.save(cart);

    return;
  }
};

export default cartDelProdService;
