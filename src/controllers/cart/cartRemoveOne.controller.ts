import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/AppError"
import removeOneCart from "../../services/cart/removeCartOne.service"
import jwt from 'jsonwebtoken'

const removeCartController = async (req:Request,res:Response)=>{
    try {
        const {cartProdId}=req.params

        let token = req.headers.authorization || ''
        token = token?.replace('Bearer ','')
        const secret = process.env.POSTGRES_SECRET_KEY || 'secret'
        const decoded = jwt.verify(token, secret)
        const {sub} =decoded
        const userId = sub || ''

        await removeOneCart(cartProdId,userId)

        res.status(204).json()
    } catch (error) {
        if(error instanceof AppError){
            handleError(error,res)
        }
    }
}
export default removeCartController