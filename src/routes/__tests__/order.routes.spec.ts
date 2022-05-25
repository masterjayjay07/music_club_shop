import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../app";
import { IUserId } from "../../interfaces";
import { IProductId } from "../../interfaces";
import { IAddressCreate } from "../../interfaces";
import { string } from "yup";

describe("Order CRUD - API ROUTE", () => {
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
    is_adm:false
  };

  const userAdmin: IUserId = {
    name:"Ricardo",
    email:"ricardo@mail.com",
    password:"1234",
    user_name:"ricardo",
    birth_date:"18/06/1997",
    tel:"24998913379",
    is_adm:true
  };
  
  const headers ={
    token:''
  }
  const adminHeaders = {
    token:''
  }

  const loginData = {
    email:"heitor@mail.com",
    password:"1234",
  }
  const loginAdminData = {
    email:"ricardo@mail.com",
    password:"1234",
  }

  const productId = {
    id:""
  }
  const order ={
    id:''
  }
  const orderRequestBody = {
      status:"Pedido enviado",
      typeOfPayment:"Boleto",
      street:"Rua Bernardino Souza Rocha",
      number:685,
      cep:2764000,
      neighborhood:"Barão de Juparanã",
      country:"Brasil",
      complement:"casa",
      city:"valença"
    
  }

  it("Should not be able to create order with invalid authorization token",async ()=>{
    const creationAdm = await request(app).post('/users').send(userAdmin) 
    const tokenAdmin = await request(app).post("/users/login").send(loginAdminData)
    
    adminHeaders.token = tokenAdmin.body.token
    const productCreation = await request(app).post("/products").send(productData).set("Authorization",adminHeaders.token)
    productId.id = productCreation.body.id
    
    const createtionRes = await request(app).post('/users').send(userData) 
    const tokenRes = await request(app).post("/users/login").send(loginData)
    headers.token = "Bearer "+tokenRes.body.token
    //const addToCart = await request(app).post("/cart").send({productId:productId.id}).set("Authorization",headers.token)
    
    const response = await request(app).post("/orders").send(orderRequestBody).set("Authorization",headers.token+'df' )

    expect(response.status).toBe(401) 
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()

  })

  it("Should not be able to create order without authorization token",async()=>{
    const response = await request(app).post("/orders").send(orderRequestBody)

    expect(response.status).toBe(401) 
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })

  it('Should not be able to create order with empty cart',async ()=>{
    const response = await request(app).post("/orders").send(orderRequestBody).set("Authorization",headers.token )

    expect(response.status).toBe(409) 
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()

  })



  it('Should be able to create order',async ()=>{
    await request(app).post("/cart").send({productId:productId.id}).set("Authorization",headers.token)
    const response = await request(app).post("/orders").send(orderRequestBody).set("Authorization",headers.token )
    order.id = response.body.id
    expect(response.status).toBe(201) 
    expect(response.body.id).toBeDefined()

  })

  it("Should not be able to list all orders without being admin user",async()=>{
    const response = await request(app).get("/orders").set("Authorization",headers.token )

    expect(response.status).toBe(401) 
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })

  it("Should not be able to list all orders with invalid token",async()=>{
    const response = await request(app).get("/orders").set("Authorization",headers.token+'df' )

    expect(response.status).toBe(401) 
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })

  it("Should not be able to list all orders without token",async()=>{
    const response = await request(app).get("/orders")

    expect(response.status).toBe(401) 
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
  })

  it("Should be able to show orders from profile",async()=>{
    const response = await request(app).get("/orders/profile").set("Authorization",headers.token )

    expect(response.status).toBe(200) 
    
  })


  it("Should not be able to show orders from profile without authorization token",async()=>{
    const response = await request(app).get("/orders/profile")

    expect(response.status).toBe(401) 
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
    
  })


  it("Should not be able to show orders from profile with invalid authorization token",async()=>{
    const response = await request(app).get("/orders/profile").set("Authorization",headers.token+'df' )

    expect(response.status).toBe(401) 
    expect(response.body.status).toBeDefined()
    expect(response.body.statusCode).toBeDefined()
    expect(response.body.message).toBeDefined()
    
  })
  it("Should be able to update order",async()=>{
    const response = await request(app).patch(`/orders/${order.id}`).send({status:"Processando"}).set("Authorization",headers.token )
    
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('Processando')
  })


  it("Should be able to delete order",async()=>{
    const response = await request(app).delete(`/orders/${order.id}`).set("Authorization",headers.token )

    expect(response.status).toBe(204)

  })
  
});