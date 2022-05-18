import { Router } from "express";
import authTokenMiddleware from "../../middlewares/authToken.middleware";

const userRouter = Router()

userRouter.get('')
userRouter.post('/')

userRouter.use(authTokenMiddleware)

userRouter.get('/:id')
userRouter.delete('/:id')
userRouter.patch('/:id')

export default userRouter