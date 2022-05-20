import AppDataSource from "../../data-source"
import Cart from "../../entities/cart.entity"
import { Product } from "../../entities/product.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

interface IAddCart {
    userId:string | (()=>string);
    productId:string
}

const addCartService = async ({ userId, productId }:IAddCart)=>{
    const cartRepository = AppDataSource.getRepository(Cart)
    const userRepository = AppDataSource.getRepository(User)
    const productRepository = AppDataSource.getRepository(Product)


    const users = await userRepository.find()
    const user = users.find(user=>user.id===userId)
    if(!user){
        throw new AppError(404,"User not found")
    }

    const products = await productRepository.find()
    const productToAdd = products.find(product=>product.id===productId)
    if(!productToAdd){
        throw new AppError(404,"Product not found")
    }
    const carts = await cartRepository.find()
    const cart = carts.find(cart=>cart.id===user?.cart.id)
    
    if(cart && productToAdd){
        
        if(cart.products.some(prod=>prod.id===productToAdd.id)){
            
            throw new AppError(400,'Product is already added to the cart')
        }else{
            cart.products = [...cart.products,productToAdd] 
        }
        cart.subtotal += productToAdd.price
        
        await cartRepository.save(cart)
        return cart
    }
  
  return
}

export default addCartService