import { Request, Response } from "express";
import createOrderService from "../../services/order/createOrder.service";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../../errors/AppError";

const createOrderController = async (req: Request, res: Response) => {
  try {
    const {
      status,
      typeOfPayment,
      street,
      number,
      cep,
      neighborhood,
      country,
      complement,
      city,
    } = req.body;

    const userId = req.user.id;

    const result = await createOrderService({
      userId,
      status,
      typeOfPayment,
      street,
      number,
      cep,
      neighborhood,
      country,
      complement,
      city,
    });
    return res.status(201).json(instanceToPlain(result));
  } catch (error) {
    if (error instanceof AppError) handleError(error, res);
  }
};

export default createOrderController;
