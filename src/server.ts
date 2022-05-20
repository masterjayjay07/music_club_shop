import app from "./app";
import AppDataSource from "./data-source";

const init = async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
  app.listen(process.env.PORT || 3000, () =>
    console.log(`App está rodando na porta ${process.env.PORT || 3000}`)
  );
};
init();
