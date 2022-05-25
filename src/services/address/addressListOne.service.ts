import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const addressListOneService = async (id: string) => {
  const addressRepository = AppDataSource.getRepository(Address);
  //const userRepository = AppDataSource.getRepository(User);

  const allAddress = await addressRepository.find();

  const address = allAddress.filter(address=>address.id===id)
  if(!allAddress){
    throw new AppError(404,'Not found any address')
  }
  return address
  //const allUser = await userRepository.find();

// const actualUser = allUser.find((element) => element.id === user_id);

  // if (!actualUser) {
  //   throw new AppError(404, "No user was found");
  // }
  // if (actualUser.address.length === 0) {
  //   throw new AppError(404, "No address was found");
  // }
  // return actualUser.address;
};

export default addressListOneService;
