import AppDataSource from "../../data-source";
import CartProduct from "../../entities/cart-product.entity";
import Cart from "../../entities/cart.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

interface IAddCart {
  userId: string;
  productId: string;
}

const addCartService = async ({ userId, productId }: IAddCart) => {
  const cartRepository = AppDataSource.getRepository(Cart);
  const userRepository = AppDataSource.getRepository(User);
  const productRepository = AppDataSource.getRepository(Product);
  const cartProductRepository = AppDataSource.getRepository(CartProduct);

  const users = await userRepository.find();
  const user = users.find((user) => user.id === userId);
  if (!user) {
    throw new AppError(404, "User not found");
  }

  const products = await productRepository.find();
  const productToAdd = products.find((product) => product.id === productId);

  if (!productToAdd) {
    throw new AppError(404, "Product not found");
  }
  const carts = await cartRepository.find();
  const cart = carts.find((cart) => cart.id === user?.cart.id);

  if (cart && productToAdd) {
    cartRepository.create({});

    const cartProd = cart.products.find(
      (prod) => prod.productId === productToAdd.id
    );

    if (cartProd) {
      cartProd.quantity++;
      cart.subtotal = cart?.products.reduce(
        (acc, prod) => acc + prod.product.price * prod.quantity,
        0
      );
      await cartProductRepository.save(cartProd);
      await cartRepository.save(cart);
      return cart;
    } else {
      const productAdded = cartProductRepository.create({
        quantity: 1,
        productId,
        cartId: cart.id,
        product: productToAdd,
      });
      cart.subtotal = productAdded.product.price;
      await cartRepository.save(cart);
      await cartProductRepository.save(productAdded);

      return cartRepository.findOne({ where: { userId } });
    }
  }
  return;
};

export default addCartService;
