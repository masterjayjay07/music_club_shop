import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import addressUpdateService from "../../services/address/addressUpdate.service";

const addressUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { street, number, cep, neighborhood, country, complement } = req.body;
    const updatedAddress = await addressUpdateService({
      id,
      street,
      number,
      cep,
      neighborhood,
      country,
      complement,
    });
    return res
      .status(200)
      .json({ message: "Address updated", address: updatedAddress });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default addressUpdateController;
