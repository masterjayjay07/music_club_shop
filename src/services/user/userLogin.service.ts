import { IUserLogin } from "../../interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

const userLoginService = async ({ email, user_name, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository
    .createQueryBuilder()
    .addSelect("password")
    .getMany();

  const account = users.find(
    (user) => user.email === email || user.user_name === user_name
  );

  if (!account) {
    throw new AppError(404, "Account not found");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError(401, "Wrong email/password");
  }

  const token = jwt.sign(
    { email: email, is_adm: account.is_adm, user_name: account.user_name },

    String(process.env.POSTGRES_SECRET_KEY) || 'secret',
    {
      subject: account.id,
      expiresIn: "1d",
    }
  );

  return token;
};

export default userLoginService;
