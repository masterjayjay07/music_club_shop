import AppDataSource from "../../data-source";
import Order from "../../entities/order.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const orderListUserOneService = async (id: string) => {
  const orderRepository = AppDataSource.getRepository(Order);
  const userRepository = AppDataSource.getRepository(User);

  const order = await orderRepository.find({ where: { userId: id } });

  if (order.length === 0) {
    throw new AppError(404, "Order does not exist");
  }

  return order;
};

export default orderListUserOneService;