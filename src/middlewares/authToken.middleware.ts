import { NextFunction, Request, Response } from "express"
import AppError from "../errors/AppError"
import jwt  from "jsonwebtoken"

const authTokenMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    let token = req.headers.authorization

    if(!token){
        throw new AppError("Missing authorization token",401)
    }

    token = token.replace('Bearer ','')
    const secretKey = process.env.POSTGRES_SECRET_KEY || ''

    jwt.verify(token,secretKey,(err)=>{
        if(err){
            throw new AppError("Invalid Token",401)
        }
    })
    
    next()
}
export default authTokenMiddleware