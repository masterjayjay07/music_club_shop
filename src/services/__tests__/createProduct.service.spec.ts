import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import createProductService from "../product/createProduct.service";

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

  test("Should be able to create a new product", async () => {
    const product = {
      name: "Violao",
      description: "Violao de nylon",
      quantity_stock: 2,
      rating: 2,
      label: "Flaming",
      type: "cordas",
      price: 200,
      img_url:
        "https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg",
    };

    const createProduct = await createProductService(product);

    expect(createProduct).toHaveProperty("id");
    expect(createProduct).toBeTruthy();
  });
});
