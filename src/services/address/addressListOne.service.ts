import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";

const addressListOneService = async (user_id: string) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const allAddress = await addressRepository.find();

  const userAllAddress = allAddress.filter(
    (element) => element.user.id === user_id
  );

  if (userAllAddress.length === 0) {
    throw new AppError(404, "No address was found");
  }
  return userAllAddress;
};

export default addressListOneService;
