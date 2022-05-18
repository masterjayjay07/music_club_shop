import { Router } from "express";

const orderRouter = Router()

orderRouter.get('')
orderRouter.post('/')
orderRouter.get('/:id')
orderRouter.delete('/:id')
orderRouter.patch('/:id')

export default orderRouter