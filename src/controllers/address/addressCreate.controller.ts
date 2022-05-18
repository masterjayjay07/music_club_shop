import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import addressCreateService from "../../services/address/addressCreate.service";

const addressCreateController = async (req: Request, res: Response) => {
  try {
    const { user_id, street, number, cep, neighborhood, country, complement } =
      req.body;
    const address = addressCreateService({
      user_id,
      street,
      number,
      cep,
      neighborhood,
      country,
      complement,
    });
    return res
      .status(201)
      .json({ message: "Address created", address: address });
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.message, err.statusCode);
    }
  }
};

export default addressCreateController;
