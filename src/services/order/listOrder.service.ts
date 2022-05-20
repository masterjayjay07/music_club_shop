import AppDataSource from "../../data-source";
import Order from "../../entities/order.entity";

const orderListService = async () => {
  const orderRepository = AppDataSource.getRepository(Order);

  const orders = orderRepository.find();

  return orders;
};

export default orderListService;