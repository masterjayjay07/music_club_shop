import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../app";
import { IUserId } from "../../interfaces";
import { IProductId } from "../../interfaces";
import { IAddressCreate } from "../../interfaces";
import { string } from "yup";

describe("Product CRUD route - API ROUTE", () => {
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

  //name, price, img_url, type, quantity_stock, rating, label,description
  ////////////////////////////////////////////////////////////////////////

  const productData: IProductId = {
    name: "violao",
    price: 20,
    img_url:"https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg",
    type: "Cordas",
    quantity_stock: 2,
    rating: 4,
    label: "marca_famosa",
    description:"desc1"
  };

  const productData2: IProductId = {
    name: "Clarinete",
    price: 20,
    img_url:"https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg",
    type: "Cordas",
    quantity_stock: 2,
    rating: 4,
    label: "marca_famosa",
    description:"desc1"
  };


  const headers ={
    token:''
  }
  const falseAdminHeaders ={
    token:''
  }
  const userData: IUserId = {
    name:"heitor",
    email:"heitor@mail.com",
    password:"1234",
    user_name:"heitor",
    birth_date:"18/06/1997",
    tel:"24998913379",
    is_adm:true
  };

  const userFalseAdmin: IUserId = {
    name:"Alexandre",
    email:"ale@mail.com",
    password:"1234",
    user_name:"alex",
    birth_date:"18/06/1997",
    tel:"24998913379",
    is_adm:false
  };

  const loginData = {
    email:"heitor@mail.com",
    password:"1234",
  }

  const loginDataFalseAdmin = {
    email:"ale@mail.com",
    password:"1234",
  }

  test("Should be able to create a new product", async () => {
    const responseCreation = await request(app).post("/users").send(userData);
    userData.id = responseCreation.body.id;

    const responseToken = await request(app).post('/users/login').send(loginData)
    headers.token=`Bearer ${responseToken.body.token}`


    const response = await request(app).post("/products").send(productData).set('Authorization', headers.token);
    productData.id = response.body.id;

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();

  });

  it("Should not be able to create a product with a invalid request",async ()=>{

    const response = await request(app).post("/products").send({
      name: "Clarinete",
      price: 20,
      img_url:"https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg",
      type: "Cordas",
      quantity_stock: 2,
      label: "marca_famosa",
      description:"desc1"
    }).set('Authorization', headers.token);

    expect(response.status).toBe(400);

  })

  it("Should not be able to create a product missing one info in the request",async ()=>{

    const response = await request(app).post("/products").send({
      name: "Clarinete",
      price: 20,
      img_url:"https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg",
      type: "Cordas",
      ratinggg: 4,
      label: "marca_famosa",
      description:"desc1"
    }).set('Authorization', headers.token);

    expect(response.status).toBe(400);

  })


  test("Should be able to list all products without authorization header in the API", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  it("Should be able to list one product without authorization header ", async () => {
    const response = await request(app).get(`/products/${productData.id}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
  });

  it("Should be able to update one product", async () => {
    const response = await request(app)
      .patch(`/products/${productData.id}`)
      .send({
        name: `${productData.name} Atualizado`,
      }).set('Authorization', headers.token);

    expect(response.status).toBe(200);
    // expect(response.body.message).toBeDefined();
    expect(response.body.name).toContain("Atualizado");
  });

  it("Should not be able to delete one product without authorization token", async () => {
    const response = await request(app).delete(`/products/${productData.id}`);

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  });

  it("Should not be able to delete one product with invalid Authorization token", async () => {
    const response = await request(app).delete(`/products/${productData.id}`).set('Authorization', headers.token+'df');;

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  });

  it("Should be able to delete one product", async () => {
    const response = await request(app).delete(`/products/${productData.id}`).set('Authorization', headers.token);

    expect(response.status).toBe(204);
    // expect(response.body.message).toBeDefined();
  });

  it("Should not be able to delete one product that not exists", async () => {
    const response = await request(app).delete(`/products/${productData.id}`).set('Authorization', headers.token);

    expect(response.status).toBe(404);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  });


  it("Should not be able to update one product that not exists", async () => {
    const response = await request(app).patch(`/products/${productData.id}`).set('Authorization', headers.token);

    expect(response.status).toBe(404);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  });

  it("Should not be able to update one product without Authorization token", async () => {
    const response = await request(app).patch(`/products/${productData.id}`);

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  });

  it("Should not be able to update one product with invalid authorization token", async () => {
    const response = await request(app).patch(`/products/${productData.id}`).set('Authorization', headers.token+'df');

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  });

  it("Should not be able to list one product that not exists", async () => {
    const response = await request(app).patch(`/products/${productData.id}`).set('Authorization', headers.token);

    expect(response.status).toBe(404);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  });

  it("Should not be able to create a product with the same name",async ()=>{
    const product = {
      name: "vilolao",
      price: 20,
      img_url:"https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg",
      type: "Cordas",
      quantity_stock: 2,
      rating: 4,
      label: "marca_famosa",
      description:"desc1"
    };
    const responseCreation = await request(app).post("/products").send(product).set('Authorization', headers.token);
    const response =  await request(app).post("/products").send(product).set('Authorization', headers.token);
    expect(response.status).toBe(409);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })

  
  it("Should not be able to create Product without Authorization token",async ()=>{
    const response = await request(app).post("/products").send(productData);


    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })


  it("Should not be able to create Product with invalid Authorization token",async ()=>{
    const response = await request(app).post("/products").send(productData).set('Authorization', headers.token+'dfd');

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })





  it("Should not be able to create product if its not admin user",async ()=>{
    const responseCreation = await request(app).post("/users").send(userFalseAdmin);

    const responseToken = await request(app).post('/users/login').send(loginDataFalseAdmin)
    falseAdminHeaders.token=`Bearer ${responseToken.body.token}`


    const response = await request(app).post("/products").send(productData2).set('Authorization', falseAdminHeaders.token);
    productData2.id = response.body.id;

    expect(response.status).toBe(401)
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()

  })


  it("Should not be able to update product if its not admin user", async ()=>{
    const response = await request(app).patch(`/products/${productData2.id}`).send({
        name: `${productData.name} Atualizado`,
      }).set('Authorization', falseAdminHeaders.token);


    expect(response.status).toBe(401)
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })


  it("Should not be able to delete product if its not admin user", async ()=>{
    const response = await request(app).delete(`/products/${productData2.id}`).set('Authorization', falseAdminHeaders.token);


    expect(response.status).toBe(401)
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })

  

  
});