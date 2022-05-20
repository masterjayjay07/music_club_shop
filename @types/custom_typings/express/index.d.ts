import * as express from "express";
import { IUserCreate } from "../../../src/interfaces";

declare global {
  namespace Express {
    interface Request {
      userEmail: { email: string };
    }
  }
}
