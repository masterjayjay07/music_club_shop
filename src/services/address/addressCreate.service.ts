import { IAddressCreate } from "../../interfaces";
import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";

const addressCreateService = async ({
  user_id,
  street,
  number,
  cep,
  neighborhood,
  country,
  complement,
}: IAddressCreate) => {
  const addressRepository = AppDataSource.getRepository(Address);

  // const userRepository = AppDataSource.getRepository(User);

  //  const users = await userRepository.find();

  //  const user = users.find((user) => user.id === user_id);

  // if (!user) {
  //   throw new AppError(404, "User not found");
  // }

   const newAddress = new Address();
  // newAddress.user = user;
  newAddress.street = street;
  newAddress.number = number;
  newAddress.cep = cep;
  newAddress.neighborhood = neighborhood;
  newAddress.country = country;
  newAddress.complement = complement;

  addressRepository.create(newAddress);
  await addressRepository.save(newAddress);

  return newAddress;
};

export default addressCreateService;
