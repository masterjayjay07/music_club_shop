import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import addressCreateService from "../../services/address/addressCreate.service";

const addressCreateController = async (req: Request, res: Response) => {
  try {
    const { user_id, street, number, cep, neighborhood, country, complement,city } =
      req.body;
    const address = await addressCreateService({
      user_id,
      street,
      number,
      cep,
      neighborhood,
      country,
      complement,
      city
    });

    return res
      .status(201)
      .json({ message: "Address created", address: address });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default addressCreateController;
