import * as express from "express";
import { IUserCreate } from "../interfaces";

declare global {
  namespace Express {
    interface Request {
      userEmail: { email: string };
      newUser: IUserCreate;
      userId: string;
      user: {
        id: string;
        email:string;
      };
    }
  }
}
