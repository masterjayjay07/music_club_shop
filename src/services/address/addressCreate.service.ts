import { IAddressCreate } from "../../interfaces";
import AppDataSource from "../../data-source";
import { Address } from "../../entities/address";

const addressCreateService = ({
  user_id,
  street,
  number,
  cep,
  neighborhood,
  country,
  complement,
}: IAddressCreate) => {
  const repository = AppDataSource.getRepository(Address);

  const newAddress = new Address();
  newAddress.street = street;
  newAddress.number = number;
  newAddress.cep = cep;
  newAddress.neighborhood = neighborhood;
  newAddress.country = country;
  newAddress.complement = complement;

  return newAddress;
};

export default addressCreateService;
