import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../app";
import { IUserId } from "../../interfaces";
import { IProductId } from "../../interfaces";
import { IAddressCreate } from "../../interfaces";
import { string } from "yup";

describe("Address CRUD  - API ROUTE", () => {
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
  const addressRequestBody = {
    street:"Rua Bernardino Souza Rocha",
    number:685,
    cep:2764000,
    neighborhood:"Barão de Juparanã",
    country:"Brasil",
    complement:"casa",
    city:"valença"  
  }
  const addressId ={
      id:''
  }
  const userData: IUserId = {
    name: "Gabriel",
    email: "gabriel@mail.com",
    password: "1234",
    user_name: "gabriel",
    birth_date: "18/06/1997",
    tel: "24998913379",
    is_adm: true,
  };
  
  const headers ={
    token:''
  }
  const loginData = {
    email:"gabriel@mail.com",
    password:"1234",
  }

  it("Should be able to create one address", async () => {
    const resCreation = await request(app).post('/users').send(userData)
    userData.id = resCreation.body.id
    const resLogin = await request(app).post("/users/login").send(loginData)
    headers.token = `Bearer ${resLogin.body.token}`

    const response = await request(app).post('/address').send({user_id:userData.id,...addressRequestBody}).set('Authorization',headers.token)
    
    addressId.id = response.body.address.id

    expect(response.status).toBe(201)
    expect(response.body.message).toBeDefined()
    expect(response.body.address).toBeDefined()

  });

  it("Should be able to list all address", async () => {
    const response = await request(app).get('/address').set('Authorization',headers.token)
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(1)

  });

  it("Should be able to list one address", async () => {
    const response = await request(app).get(`/address/${addressId.id}`).set('Authorization',headers.token)
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(1)
  });

  it("Should be able to update one address", async () => {
    const response = await request(app).patch(`/address/${addressId.id}`).send({country:'Azerbaijão'}).set('Authorization',headers.token)
    expect(response.status).toBe(200)
    expect(response.body.address.country).toBe('Azerbaijão')
  });

  it("Should be able to delete one address", async () => {
    const response = await request(app).delete(`/address/${addressId.id}`).set('Authorization',headers.token)
    expect(response.status).toBe(204)
  });
});
