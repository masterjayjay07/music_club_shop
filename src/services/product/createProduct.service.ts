import { AppError } from "../../errors/AppError";

/*const createProductService = async ({
  name,
  price,
  img_url,
  type,
  quantity_stock,
  rating,
  label  
}: ICreateProduct) => {
  const productRepository = AppDataSource.getRepository(Product);

  const checkProductExists = await productRepository.findOne({
    where: {
      name,
    },
  });

  if (checkProductExists) {
    throw new AppError("Product already registred", 409);
  }

  const newProduct = userProduct.create({
    id: uuid(),
    name,
    price,
    img_url,
    type,
    quantity_stock,
    rating,
    label
    created_at: new Date(),
    updated_at: new Date(),
  });

  await productRepository.save(newProduct);

  return newProduct;
};

export default createUserService;*/
