import { errorMiddleware } from "../src/middlewares/error.middleware";
import "express-async-errors";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(errorMiddleware);

export default app;
