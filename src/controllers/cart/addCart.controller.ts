import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/AppError"
import addCartService from "../../services/cart/addCart.service"
import jwt  from "jsonwebtoken"
import { IToken } from "../../interfaces"

const addCartController = async (req:Request,res:Response)=>{
    try {
        const { productId } = req.body

        // let token = req.headers.authorization || ''
        // token = token?.replace('Bearer ','')
        // const secret = process.env.POSTGRES_SECRET_KEY || 'secret'
        // const decoded = jwt.verify(token, secret) as IToken
        // const {sub} =decoded
        // const userId = sub || ''
        const userId = req.user.id

        const cartProductCreated = await addCartService({ userId, productId }) 
        
        res.status(201).json(cartProductCreated)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res)
        }
    }
}
export default addCartController