import { errorMiddleware } from "../src/middlewares/error.middleware";
import "express-async-errors";
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";

import routes from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(routes);
app.use(errorMiddleware);

export default app;
