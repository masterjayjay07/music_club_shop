import { Request, Response, NextFunction } from "express";
import orderUpdateService from "../../services/order/updateOrder.service";
import { AppError, handleError } from "../../errors/AppError";
import { instanceToPlain } from "class-transformer";

const orderUpdateController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { status } = request.body;

  try {
    const order = await orderUpdateService({
      id,
      status,
    });

    return response.json(instanceToPlain(order));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, response);
    }
  }
};

export default orderUpdateController