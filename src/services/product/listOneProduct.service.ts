import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { UserDataParams } from "../../interfaces";
import { AppError } from "../../errors/AppError";

const listOneProductService = async ({ id }: UserDataParams) => {
  const productRepository = AppDataSource.getRepository(Product);

  const checkProductExists = await productRepository.findOne({
    where: {
      id,
    },
  });

  if (!checkProductExists) {
    throw new AppError(404, "Product not found");
  }

  return checkProductExists;
};

export default listOneProductService;
