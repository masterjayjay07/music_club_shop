import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const userListOneService = async (id: string ) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if(!account){
    throw new AppError(404,"User doesnt exists")
  }

  return account;
};

export default userListOneService;
