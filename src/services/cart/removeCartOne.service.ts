import AppDataSource from "../../data-source"
import CartProduct from "../../entities/cart-product.entity"
import Cart from "../../entities/cart.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const removeOneCartService = async (cartProdId:string,userId:string | (() => string) )=>{
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
    if(qtdProducts===1){
        
        await cartProductRepository.delete({productId:cartProdId,cartId:cart.id})
        cart.subtotal = cart.products.reduce((acc,prod)=>prod.product.price+acc,0)

    }else{
        const cartProd = cart.products.find(prod=>prod.productId===cartProdId)
        if(cartProd){
            cartProd.quantity--
            cart.subtotal = cart?.products.reduce((acc,prod)=>acc+prod.product.price*prod.quantity,0)
            await cartProductRepository.save(cartProd)
            await cartRepository.save(cart)
        }
    }

    await cartRepository.save(cart)

}

export default removeOneCartService