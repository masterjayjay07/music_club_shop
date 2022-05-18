import { Request, Response, Router,Express } from "express";
import orderRouter from "./order";
import productRouter from "./product";
import userRouter from "./user";

const router = Router()

const appRouter = (app:Express)=>{
    app.use('/users',userRouter)
    app.use('/products',productRouter)
    app.use('/orders',orderRouter)
    return app
}

export default appRouter