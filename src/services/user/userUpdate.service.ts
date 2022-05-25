import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { hash } from "bcryptjs";
import { UserDataParamsUp } from "../../interfaces";

const userUpdateService = async ({
  id,
  name,
  email,
  user_name,
  birth_date,
  password,
  is_adm = false,
}: UserDataParamsUp): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new AppError(409, "Not found any user with this id");
  }

  if (password) {
    const hashedPassword = await hash(password, 8);
    password ? (user.password = hashedPassword) : user.password;
  }

  name ? (user.name = name) : user.name;
  email ? (user.email = email) : user.email;
  user_name ? (user.user_name = user_name) : user.user_name;
  birth_date ? (user.birth_date = birth_date) : user.birth_date;
  is_adm = is_adm;
  user.updated_at = new Date();

  await userRepository.save(user);

  return user;
};

export default userUpdateService;
