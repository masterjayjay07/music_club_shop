import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) =>
    console.error("Error during data source initialization", err)
  );

  app.listen(process.env.PORT || 3000, () => {
    console.log("Running at 3000");
  });
})();
