import express from "express";
import { errorMiddleware } from "../src/middlewares/error.middleware";
import router from "./routes";

const app = express();
app.use(express.json());

app.use("/", router);
app.use(errorMiddleware);

export default app;
