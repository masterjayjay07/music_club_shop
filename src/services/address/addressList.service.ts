import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";

const addressListService = async () => {
  const repository = AppDataSource.getRepository(Address);
  const allAddress = repository.find();
  return allAddress;
};

export default addressListService;
