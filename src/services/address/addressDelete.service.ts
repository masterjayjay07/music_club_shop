import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";

const addressDeleteService = async (id: string) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.find();

  const actualAddress = address.find((element) => element.id === id);
  if (!actualAddress) {
    throw new AppError(404, "Address not found");
  }
  await addressRepository.delete(actualAddress!.id);

  return true;
};

export default addressDeleteService;
