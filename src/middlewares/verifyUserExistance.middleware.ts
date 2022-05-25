import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import { AppError, handleError } from "../errors/AppError"


const verifyUserExistanceMiddleware = async (req:Request,res:Response,next:NextFunction)=>{
    const userRepository = AppDataSource.getRepository(User)
    
    const {id} = req.params
    
    const users = await userRepository.find()

    if(!users.some(user=>user.id===id)){
        const errorCatched = new AppError(404,"User not found")
        handleError(errorCatched,res)
        return
    }

    next()
}
export default verifyUserExistanceMiddleware