import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/AppError";
import { IProduct } from "../../interfaces";

const updateProductService = async ({
  id,
  name,
  price,
  img_url,
  type,
  quantity_stock,
  rating,
  label,
  description
}: IProduct): Promise<Product> => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOne({
    where: {
      id,
    },
  });

  if (!product) {
    throw new AppError(404, "Product not found");
  }

  name ? (product.name = name) : product.name;
  price ? (product.price = price) : product.price;
  img_url ? (product.img_url = img_url) : product.img_url;
  type ? (product.type = type) : product.type;
  quantity_stock
    ? (product.quantity_stock = quantity_stock)
    : product.quantity_stock;
  rating ? (product.rating = rating) : product.rating;
  label ? (product.label = label) : product.label;
  description ? product.description = description  : product.description
  
  product.updated_at = new Date();

  return productRepository.save(product);
};

export default updateProductService;
