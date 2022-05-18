// import { AppDataSource } from "../../data-source";
// import { Product } from "../../entities/product.entity";
// import AppError from "../../errors/AppError";

/*const listOneProductService = async ({ id }: IProductId) => {
  const productRepository = AppDataSource.getRepository(Product);

  const checkProductExists = await productRepository.findOne({
    where: {
      id,
    },
  });

  if (!checkProductExists) {
    throw new AppError("Product not found", 404);
  }

  return checkProductExists;
};

export default listOneProductService;*/
