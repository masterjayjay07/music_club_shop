import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import Order from "../../entities/order.entity";
import { User } from "../../entities/user.entity";
import Cart from "../../entities/cart.entity";
import Buys from "../../entities/buys.entity";
import { Address } from "../../entities/address.entity";
import BuyProduct from "../../entities/buy-product";
import CartProduct from "../../entities/cart-product.entity";

interface IUser {
  userId: string;
  status: string;
  street:string,
  number:number,
  cep:string,
  neighborhood:string,
  country:string,
  complement:string,
  city:string
  typeOfPayment:string
}

const createOrderService = async ({
  userId,
  status,
  typeOfPayment,
  street,
  number,
  cep,
  neighborhood,
  country,
  complement,
  city
}: IUser)=> {

  const orderRepository = AppDataSource.getRepository(Order);
  const usersRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart)
  const cartProductRepository = AppDataSource.getRepository(CartProduct)
  const buysRepository = AppDataSource.getRepository(Buys)
  const addressRepository = AppDataSource.getRepository(Address)
  const buyProductRepository = AppDataSource.getRepository(BuyProduct)


  const users = await usersRepository.find();
  const user = users.find(user=>user.id===userId)
  if (!user) {
    throw new AppError(404, "User not found");
  } 
  if(user.cart.products.length===0){
    throw new AppError(409,"Cart is empty")
  }
  const cart = await cartRepository.findOne({where:{id:user.cart.id}})
  
  if(cart && user){
    const copyOfProducts = [...cart.products]

    


    const buy = buysRepository.create({
      total:cart.subtotal,
      products:copyOfProducts
    })
    await buysRepository.save(buy)
    
    for(let i=0; i<cart.products.length ;i++){ 
      const tobeSaved = buyProductRepository.create({
        buyId:buy.id,
        productId:cart.products[i].productId,
        quantity:cart.products[i].quantity,
        product:cart.products[i].product
      })
      await buyProductRepository.save(tobeSaved)
    }



    cart.products =[]
    cart.subtotal = 0
    
    cartProductRepository.create({
      cartId:cart.id,
      
    })
    await cartProductRepository.delete({cartId:cart.id})

    await cartRepository.save(cart) 

    user.cart.products = []
    user.cart.subtotal = 0
    user.cart.id = cart.id
    usersRepository.create(user)
    await usersRepository.save(user) 

    const address = new Address()
    address.cep=cep
    address.complement=complement
    address.street=street
    address.number=number
    address.country=country
    address.neighborhood=neighborhood
    address.city=city

    addressRepository.create(address)
    await addressRepository.save(address)

    const updated_users = await usersRepository.find();
    const updated_user = updated_users.find(user=>user.id===userId)
    
    if(updated_user){
      const order = orderRepository.create({
        userId,
        status,
        typeOfPayment
      });
      
      order.user = updated_user
      order.buys = buy
      order.address = address

      await orderRepository.save(order);
      return order;
    }
  }

};

export default createOrderService;