import express from "express";
import { errorMiddleware } from "../src/middlewares/error.middleware";
import "express-async-errors"
import appRouter from "./routes";

const app = express();
app.use(express.json());

appRouter(app)

app.use(errorMiddleware);

export default app;
