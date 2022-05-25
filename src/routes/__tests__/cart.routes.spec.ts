import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../app";
import { IUserId } from "../../interfaces";
import { IProductId } from "../../interfaces";
import { IAddressCreate } from "../../interfaces";
import { string } from "yup";

describe("Add and remove from cart - API ROUTE", () => {
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
  
  const userData: IUserId = {
    name:"heitor",
    email:"heitor@mail.com",
    password:"1234",
    user_name:"heitor",
    birth_date:"18/06/1997",
    tel:"24998913379",
    is_adm:true
  };
  
  const headers ={
    token:''
  }

  const loginData = {
    email:"heitor@mail.com",
    password:"1234",
  }
  const productId = {
    id:""
  }
  it("Should be able to add products in cart", async ()=>{
    const createtionRes = await request(app).post('/users').send(userData) 
    const tokenRes = await request(app).post("/users/login").send(loginData)
    headers.token = "Bearer "+tokenRes.body.token

    const productCreation = await request(app).post("/products").send(productData).set("Authorization",headers.token)
    productId.id = productCreation.body.id

    const response = await request(app).post("/cart").send({productId:productId.id}).set("Authorization",headers.token)
    
    expect(response.body.products[0].quantity).toBe(1)
    expect(response.body.id).toBeDefined()
    expect(response.body.subtotal).toBeDefined()
    expect(response.body.userId).toBeDefined()
    expect(response.status).toBe(201)

  })

  it("Should be able increase the quantity of the product",async ()=>{
    const response = await request(app).post("/cart").send({productId:productId.id}).set("Authorization",headers.token)

    expect(response.status).toBe(201)
    expect(response.body.products[0].quantity).toBe(2)
    expect(response.body.id).toBeDefined()
    expect(response.body.subtotal).toBeDefined()
    expect(response.body.userId).toBeDefined()
  })

  it("Should be able to remove products in cart", async ()=>{
    const response = await request(app).delete(`/cart/${productId.id}`).send({productId:productId.id}).set("Authorization",headers.token)
    expect(response.status).toBe(204)
  })

  it("Should be able to list products in cart", async ()=>{
    const response = await request(app).get(`/cart`).set("Authorization",headers.token)
    expect(response.status).toBe(200)
  })

  it("Should not be able to list products in cart without authorization token", async ()=>{
    const response = await request(app).get(`/cart`)
    expect(response.status).toBe(401)
     expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })

  it("Should not be able to list products in cart with invalid authorization token", async ()=>{
    const response = await request(app).get(`/cart`).set("Authorization",headers.token+'df')
    expect(response.status).toBe(401)
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })
  

  it("Should not be able to add without authorization Token", async ()=>{
    const response = await request(app).post(`/cart/`).send({productId:productId.id})
    expect(response.status).toBe(401)
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })


  it("Should not be able to add with invalid authorization Token", async ()=>{
    const response = await request(app).post(`/cart/`).send({productId:productId.id}).set("Authorization",headers.token+'fd')
    expect(response.status).toBe(401)
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })


  it("Should not be able to remove without authorization Token", async ()=>{
    const response = await request(app).delete(`/cart/${productId.id}`)
    expect(response.status).toBe(401)
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })


  it("Should not be able to remove with invalid authorization Token", async ()=>{
    const response = await request(app).delete(`/cart/${productId.id}`).set("Authorization",headers.token+'fd')
    expect(response.status).toBe(401)
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })

  
})