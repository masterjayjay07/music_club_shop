import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/AppError";
import { DeleteResult } from "typeorm";
import { UserDataParams } from "../../interfaces";

const deleteProductService = async ({
  id,
}: UserDataParams): Promise<DeleteResult> => {
  const productRepository = AppDataSource.getRepository(Product);

  const checkProductExists = await productRepository.findOne({
    where: {
      id,
    },
  });

  if (!checkProductExists) {
    throw new AppError(404, "User not found");
  }

  return await productRepository.delete(id);
};

export default deleteProductService;
