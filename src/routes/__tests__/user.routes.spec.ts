import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../app";
import { IUserId } from "../../interfaces";
import { IProductId } from "../../interfaces";
import { IAddressCreate } from "../../interfaces";
import { string } from "yup";

describe("Create an user - API ROUTE", () => {
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

  const userData: IUserId = {
    name: "Joao",
    email: "joaokenzie@gmail.com",
    user_name: "juaozika",
    birth_date: "18/09/2021",
    password: "12345",
    cart: {
      total: 20,
      userId: "3123dfs1",
    },
  };

  test("Should be able to create a new user in the API", async () => {
    const response = await request(app).post("/users").send(userData);
    userData.id = response.body.id;

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");
  });

  test("Should be able to list all users in the API", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it("Should be able to list one user", async () => {
    const response = await request(app).get(`/users/${userData.id}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
  });

  it("Should be able to update one user", async () => {
    const response = await request(app)
      .patch(`/users/${userData.id}`)
      .send({
        name: `${userData.name} Atualizado`,
      });

    expect(response.status).toBe(200);
    // expect(response.body.message).toBeDefined();
    expect(response.body.name).toContain("Atualizado");
  });

  it("Should be able to delete one user", async () => {
    const response = await request(app).delete(`/users/${userData.id}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBeDefined();
  });

  ////////////////////////////////////////////////////////////////////////

  const productData: IProductId = {
    name: "vilolao",
    price: 20,
    img_url:
      "https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg",
    type: "Cordas",
    quantity_stock: 2,
    rating: 4,
    label: "marca_famosa",
  };

  test("Should be able to create a new product the API", async () => {
    const response = await request(app).post("/products").send(productData);
    productData.id = response.body.id;

    expect(response.status).toBe(201);
    // expect(response.body.message).toBeDefined();
    expect(response.body).toHaveProperty("id");
  });

  test("Should be able to list all products in the API", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it("Should be able to list one product", async () => {
    const response = await request(app).get(`/products/${productData.id}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
  });

  it("Should be able to update one product", async () => {
    const response = await request(app)
      .patch(`/products/${productData.id}`)
      .send({
        name: `${productData.name} Atualizado`,
      });

    expect(response.status).toBe(200);
    // expect(response.body.message).toBeDefined();
    expect(response.body.name).toContain("Atualizado");
  });

  it("Should be able to delete one product", async () => {
    const response = await request(app).delete(`/products/${productData.id}`);

    expect(response.status).toBe(204);
    // expect(response.body.message).toBeDefined();
  });

  //////////////////////////////////////////////////////////////////////////////

  // interface IAddressCreateTest {
  //   street: string;
  //   number: number;
  //   user_id?: string;
  //   cep: string;
  //   neighborhood: string;
  //   country: string;
  //   complement: string;
  // }

  // test("Should be able to create a new address the API", async () => {
  //   const addressData: IAddressCreateTest = {
  //     street: "Joao",
  //     number: 20,
  //     user_id: userData.id,
  //     cep: "74444",
  //     neighborhood: "bonança",
  //     country: "Brasiu",
  //     complement: "perto do bar",
  //   };

  //   const response = await request(app).post("/address").send(addressData);
  //   console.log(userData);
  //   console.log(addressData);
  //   // addressData.user_id = response.body.user_id;
  //   console.log(response.body);
  //   expect(response.status).toBe(201);
  //   // expect(response.body.message).toBeDefined();
  //   expect(response.body).toHaveProperty("id");
  // });

  // test("Should be able to list all address in the API", async () => {
  //   const response = await request(app).get("/address");

  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveLength(1);
  // });

  // it("Should be able to list one address", async () => {
  //   const response = await request(app).get(`/address/${addressData.user_id}`);

  //   expect(response.status).toBe(200);
  //   expect(response.body.id).toBeDefined();
  // });

  // it("Should be able to update one address", async () => {
  //   const response = await request(app)
  //     .patch(`/address/${addressData.user_id}`)
  //     .send({ addressData });

  //   expect(response.status).toBe(200);
  //   expect(response.body.message).toBeDefined();
  // });

  // it("Should be able to delete one product", async () => {
  //   const response = await request(app).delete(
  //     `/address/${addressData.user_id}`
  //   );

  // expect(response.status).toBe(200);
  //   // expect(response.body.message).toBeDefined();
  // });
});
