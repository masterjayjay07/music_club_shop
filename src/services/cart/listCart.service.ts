import AppDataSource from "../../data-source"
import Cart from "../../entities/cart.entity"

const listCartService = async ()=>{
    const cartRepository = AppDataSource.getRepository(Cart)
    const cartProducts = await cartRepository.find()

    return cartProducts

}

export default listCartService