import AppDataSource from "../../data-source";
import Order from "../../entities/order.entity";
import { Product } from "../../entities/product.entity";
import { IUserId } from "../../interfaces";

const createOrderService = async ({ userId }: IUserId) => {
  const orderRepository = AppDataSource.getRepository(Order);
  const productRepository = AppDataSource.getRepository(Product);

  const order = orderRepository.create({});
};

export default createOrderService;
