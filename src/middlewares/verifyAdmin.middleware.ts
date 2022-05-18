import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import User from "../entities"
import AppError from "../errors/AppError"
import { errorMiddleware } from "./error.middleware"

const verifyAdminMiddleware = async (error:Error,req:Request,res:Response,next:NextFunction)=>{
    const repository = AppDataSource.getRepository(User)

    const userEmail = req.userEmail 

    const user = await repository.findOne({where:{email:userEmail}}) 

    if(user?.isAdmin===false){
        const err = new AppError("You need to be admin",401)
        errorMiddleware(err,req,res,next)
    }

    next()
}
export default verifyAdminMiddleware