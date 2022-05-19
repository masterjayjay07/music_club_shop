import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import userCreateService from "../user/userCreate.service";

describe("Create a Product", () => {
  let connection: DataSource;

  // Aqui dentro, nos conectamos com o banco de dados antes dos testes
  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during data source initialization", err)
      );
  });

  // Aqui dentro, limpamos todos os dados da conexao
  afterAll(async () => {
    await connection.destroy();
  });

  test("Should be able to create a new user", async () => {
    const user = {
      name: "Joao",
      email: "joaokenzie@gmail.com",
      user_name: "juaozika",
      birth_date: "18/09/2021",
      password: "12345",
    };

    const createUser = await userCreateService(user);

    expect(createUser).toHaveProperty("id");
    expect(createUser).toBeTruthy();
  });
});
