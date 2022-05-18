import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Order from "../../entities/order.entity";
import { User } from "../../entities/user.entity";

interface IUser {
  userId: string;
  status: string;
}

// 1,2,3,4,5,6,7

const createOrderService = async ({
  userId,
  status,
}: IUser): Promise<Order> => {
  const orderRepository = AppDataSource.getRepository(Order);
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOne({
    where: {
      id: userId,
    },
  });

  console.log(user);

  if (!user) {
    throw new AppError(509, "Invalid list of ids");
  }

  const order = orderRepository.create({
    userId,
    status,
  });
  order.user = user;

  console.log(order);

  await orderRepository.save({ userId, status });

  return order;
};

export default createOrderService;
