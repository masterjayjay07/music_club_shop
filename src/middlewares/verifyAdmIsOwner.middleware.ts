// import { NextFunction, Request, Response } from "express";
// import AppDataSource from "../data-source";
// import { User } from "../entities/user.entity";
// import { AppError } from "../errors/AppError";
// import { errorMiddleware } from "./error.middleware";
// import Order from "../entities/order.entity";
// import jwt from "jsonwebtoken";

// const verifyAdmIsOwnerMiddleware = async (
//   error: Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const repository = AppDataSource.getRepository(User);
//   const orderRepository = AppDataSource.getRepository(Order);

//   const { id } = req.params;
//   const { userId } = req.params;
//   let token: string = req.headers.authorization || "";
//   token = token.replace("Bearer ", "");

//   const secretKey = process.env.POSTGRES_SECRET_KEY || "";
//   const decoded = jwt.verify(token, secretKey);
//   const { sub } = decoded;

//   const user = await repository.findOne({ where: { email: sub as string } });

//   if (id) {
//     const order = await orderRepository.findOne({ where: { id } });
//     if (!user) {
//       const err = new AppError(404, "User do not exist");
//       errorMiddleware(err, req, res, next);
//       return;
//     }

//     if (user.is_adm === false && user.id != order?.user.id) {
//       const err = new AppError(401, "You need to be admin");
//       errorMiddleware(err, req, res, next);
//     }
//   } else if (userId) {
//     const order = await orderRepository.findOne({ where: { userId } });
//     if (!user) {
//       const err = new AppError(404, "User do not exist");
//       errorMiddleware(err, req, res, next);
//       return;
//     }

//     if (user.is_adm === false && user.id != userId) {
//       const err = new AppError(401, "You need to be admin");
//       errorMiddleware(err, req, res, next);
//     }
//   }

//   next();
// };
// export default verifyAdmIsOwnerMiddleware;
