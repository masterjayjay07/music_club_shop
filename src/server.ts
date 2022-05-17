import app from "./app";
import AppDataSource from "./data-source";

const port = 3000;

const init = () => {
  AppDataSource.initialize()
    .then(() => console.log("AppDatasource rodando"))
    .catch((err) => console.error('Error: ',err));

  app.listen(port, () => console.log(`App está rodando na porta ${port}`));
};
init();
