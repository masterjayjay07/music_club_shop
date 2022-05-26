import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const addressListOneService = async (id: string) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const allAddress = await addressRepository.find();

  const address = allAddress.filter((address) => address.id === id);

  if (!allAddress) {
    throw new AppError(404, "Not found any address");
  }

  return address;
};

export default addressListOneService;
