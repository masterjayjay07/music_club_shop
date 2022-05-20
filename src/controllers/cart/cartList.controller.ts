import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/AppError"
import listCartService from "../../services/cart/listCart.service"

const cartListController = async (req:Request,res:Response)=>{
    try {
        const carts = await listCartService()

        res.status(200).json(carts)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res)
        }
    }
}
export default cartListController
