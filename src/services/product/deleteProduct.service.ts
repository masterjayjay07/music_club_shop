import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import AppError from "../../errors/AppError";
import { DeleteResult } from "typeorm";

/*const deleteProductService = async ({
  id,
}: ProductId): Promise<DeleteResult> => {
  const productRepository = AppDataSource.getRepository(Product);

  const checkProductExists = await productRepository.findOne({
    where: {
      id,
    },
  });

  if (!checkProductExists) {
    throw new AppError("User not found", 404);
  }

  return await productRepository.delete(id);
};

export default deleteProductService;*/
