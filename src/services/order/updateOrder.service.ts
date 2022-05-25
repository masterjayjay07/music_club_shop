import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Order from "../../entities/order.entity";

interface IOrderUp {
  status: string;
  id: string;
}

const orderUpdateService = async ({ status, id }: IOrderUp): Promise<Order> => {
  const orderRepository = AppDataSource.getRepository(Order);

  const order = await orderRepository.findOne({ where: { id } });

  if (!order) {
    throw new AppError(404, "Not found any order with this id");
  }

  status ? (order.status = status) : order.status;
  await orderRepository.save(order);

  return order;
};

export default orderUpdateService;
