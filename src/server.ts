import app from "./app";
import { AppDataSource } from "./data-source";

const port = 3000;

const init = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
  app.listen(port, () => console.log(`App está rodando na porta ${port}`));
};
init();
