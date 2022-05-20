import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Order from "../../entities/order.entity";
import { User } from "../../entities/user.entity";
import Cart from "../../entities/cart.entity";
import Buys from "../../entities/buys.entity";
import { Address } from "../../entities/address.entity";

interface IUser {
  userId: string;
  status: string;
}

// 1,2,3,4,5,6,7

const createOrderService = async ({
  userId,
  status,
}: IUser)=> {
  const orderRepository = AppDataSource.getRepository(Order);
  const usersRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart)
  const buysRepository = AppDataSource.getRepository(Buys)
  const addressRepository = AppDataSource.getRepository(Address)


  const users = await usersRepository.find();
  const user = users.find(user=>user.id===userId)
  if (!user) {
    throw new AppError(404, "User not found");
  }

  if(user.cart.products.length===0){
    throw new AppError(409,"Cart is empty")
  }

  const cart = await cartRepository.findOne({where:{id:user.cart.id}})

  if(cart){

    const buy = new Buys()
    buy.products = cart?.products
    buy.total = cart?.subtotal
    
    buysRepository.create(buy)
    await buysRepository.save({...buy,userId})
    
    cart.products =[]
    cart.subtotal = 0
    await cartRepository.save(cart)


  }

  const updated_users = await usersRepository.find();
  const updated_user = updated_users.find(user=>user.id===userId)
  if(updated_user){

    const order = orderRepository.create({
      userId,
      status,
    });
    order.user = updated_user;
    
    await orderRepository.save({ userId, status });
    
    return order;
  }
};

export default createOrderService;