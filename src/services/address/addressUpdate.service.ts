import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";
import { IAddressUpdate } from "../../interfaces";

const addressUpdateService = async ({
  id,
  street,
  number,
  cep,
  neighborhood,
  country,
  complement,
}: IAddressUpdate) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = await addressRepository.find();

  const actualAddress = address.find((element) => element.id === id);
  if (!actualAddress) {
    throw new AppError(404, "Address not found");
  }
  street ? (actualAddress.street = street) : actualAddress.street;
  number ? (actualAddress.number = number) : actualAddress.number;
  cep ? (actualAddress.cep = cep) : actualAddress.cep;
  neighborhood
    ? (actualAddress.neighborhood = neighborhood)
    : actualAddress.neighborhood;
  country ? (actualAddress.country = country) : actualAddress.country;
  complement
    ? (actualAddress.complement = complement)
    : actualAddress.complement;

  await addressRepository.update({ id }, actualAddress);
  await addressRepository.save(actualAddress);

  return actualAddress;
};

export default addressUpdateService;
