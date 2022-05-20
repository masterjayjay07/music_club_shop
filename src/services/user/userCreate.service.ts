import { IUserCreate } from "../../interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcryptjs";
import { AppError } from "../../errors/AppError";
import Cart from "../../entities/cart.entity";
import { v4 as uuid } from "uuid";

const userCreateService = async ({
  name,
  email,
  user_name,
  birth_date,
  is_adm,
  password,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart);

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

  const userId = uuid();

  const cart = new Cart();
  cart.total = 0;
  cart.userId = userId;

  cartRepository.create(cart);
  await cartRepository.save(cart);

  const user = new User();
  user.id = userId;
  user.name = name;
  user.email = email;
  user.user_name = user_name;
  user.birth_date = birth_date;
  user.is_adm = is_adm;
  user.password = bcrypt.hashSync(password, 8);
  user.cart = cart;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
