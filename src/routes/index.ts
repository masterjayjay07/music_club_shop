import { Request, Response, Router } from "express";

const router = Router()

router.get('',(req:Request,res:Response)=>{
    res.send("Está rodando no docker")
})

export default router