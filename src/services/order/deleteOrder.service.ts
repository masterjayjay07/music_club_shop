import { string } from "yup";
import AppDataSource from "../../data-source";
import Order from "../../entities/order.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { UserDataParams } from "../../interfaces";

const orderDeleteService = async (id: string) => {
  const orderRepository = AppDataSource.getRepository(Order);

  const orders = await orderRepository.find();

  const account = orders.find((order) => order.id === id);

  if (!account) {
    throw new AppError(404, "Order doesnt exist");
  }

  await orderRepository.delete(account!.id);

  return true;
};

export default orderDeleteService;