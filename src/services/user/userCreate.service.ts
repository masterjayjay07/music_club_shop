import { IUserCreate } from "../../interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcryptjs";
import { AppError } from "../../errors/AppError";
import Cart from "../../entities/cart.entity";
import { Address } from "../../entities/address.entity";
import Buys from "../../entities/buys.entity";

const userCreateService = async ({
  name,
  email,
  user_name,
  birth_date,
  password,
  is_adm = false,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart);
  const addressRepository = AppDataSource.getRepository(Address);
  const buyRepository = AppDataSource.getRepository(Buys);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);
  const userNameAlreadyExists = users.find(
    (user) => user.user_name === user_name
  );

  if (emailAlreadyExists) {
    throw new AppError(409, "Email already exists");
  }

  if (userNameAlreadyExists) {
    throw new AppError(409, "Username already exists");
  }

  const cart = new Cart();
  cart.products = [];
  cart.subtotal = 0;

  cartRepository.create(cart);
  await cartRepository.save(cart);

  const address = new Address();
  address.cep = "";
  address.complement = "";
  address.neighborhood = "";
  address.street = "";
  address.country = "";
  address.number = 0;

  addressRepository.create(address);
  await addressRepository.save(address);

  const user = new User();
  user.name = name;
  user.email = email;
  user.user_name = user_name;
  user.birth_date = birth_date;
  user.is_adm = is_adm;
  user.password = bcrypt.hashSync(password, 8);
  user.cart = cart;
  user.address = [address];
  user.buys = [];

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
