import AppDataSource from "../../data-source"
import Cart from "../../entities/cart.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const removeCartService = async (cartProdId:string,userId:string | (() => string) )=>{
    const cartRepository = AppDataSource.getRepository(Cart)
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()
    const user = users.find(user=>user.id===userId)
    if(!user){
        throw new AppError(404,"User not found")
    }
    
    const cart = user.cart

    if(cart.products.some(prod=>prod.id===cartProdId)===false){
        throw new AppError(404,'Product is not on cart')
    }
    cart.products = cart.products.filter(prod=>prod.id!==cartProdId)
    cart.subtotal = cart.products.reduce((acc,prod)=>prod.price+acc,0)
    
    await cartRepository.save(cart)

}

export default removeCartService