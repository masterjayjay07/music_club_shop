import AppDataSource from "../../data-source"
import CartProduct from "../../entities/cart-product.entity"
import Cart from "../../entities/cart.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const removeCartService = async (cartProdId:string,userId:string | (() => string) )=>{
    const cartRepository = AppDataSource.getRepository(Cart)
    const userRepository = AppDataSource.getRepository(User)
    const cartProductRepository = AppDataSource.getRepository(CartProduct)
    const users = await userRepository.find()
    const user = users.find(user=>user.id===userId)
    if(!user){
        throw new AppError(404,"User not found")
    }
    const cart = user.cart
    if(cart.products.some(prod=>prod.productId===cartProdId)===false){
        throw new AppError(404,'Product is not on cart')
    }
    const qtdProducts = cart.products.reduce((acc,prod)=>acc+prod.quantity,0)
    await cartProductRepository.delete({productId:cartProdId,cartId:cart.id})
    cart.subtotal = cart.products.reduce((acc,prod)=>prod.product.price*prod.quantity+acc,0)
    await cartRepository.save(cart)

}

export default removeCartService