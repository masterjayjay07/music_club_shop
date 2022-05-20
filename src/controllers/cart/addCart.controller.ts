import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/AppError"
import addCartService from "../../services/cart/addCart.service"
import jwt  from "jsonwebtoken"

const addCartController = async (req:Request,res:Response)=>{
    try {
        const { productId } = req.body

        let token = req.headers.authorization || ''
        token = token?.replace('Bearer ','')
        const secret = process.env.POSTGRES_SECRET_KEY || ''
        const decoded = jwt.verify(token, secret)
        const {sub} =decoded
        const userId = sub || ''
        
        const cartProductCreated = await addCartService({ userId, productId })
        
        res.status(201).json(cartProductCreated)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res)
        }
    }
}
export default addCartController