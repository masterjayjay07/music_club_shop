import { Router } from "express";

const productRouter = Router()

productRouter.get('')
productRouter.post('/')
productRouter.get('/:id')
productRouter.delete('/:id')
productRouter.patch('/:id')

export default productRouter