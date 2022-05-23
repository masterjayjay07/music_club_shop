import AppDataSource from "../../data-source";
import Order from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";

const orderListOneService = async (id: string) => {
  const orderRepository = AppDataSource.getRepository(Order);

  const order = await orderRepository.findOne({ where: { id } });

  if (!order) {
    throw new AppError(404, "Order does not exist");
  }

  return order;
};

export default orderListOneService;