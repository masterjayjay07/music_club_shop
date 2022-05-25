import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest";
import app from "../../app";
import { IUserId } from "../../interfaces";
import { IProductId } from "../../interfaces";
import { IAddressCreate } from "../../interfaces";
import { string } from "yup";

describe("User CRUD route - API ROUTE", () => {
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
    name:"Gabriel",
    email:"gabriel@mail.com",
    password:"1234",
    user_name:"gabriel",
    birth_date:"18/06/1997",
    tel:"24998913379",
    is_adm:true
  };

  const secondUser: IUserId = {
    name:"José",
    email:"jose@mail.com",
    password:"1234",
    user_name:"jose",
    birth_date:"18/06/1997",
    tel:"24998913379",
    is_adm:false
  };

  const headers ={
    token:''
  }

  const headersSecondUser ={
    token:''
  }
  const loginData = {
    email:"gabriel@mail.com",
    password:"1234",
  }
  const loginDataSecondUser = {
    email:'jose@mail.com',
    password:"1234"
  }
  
  test("Should be able to create a new user in the API", async () => {
    
    const response = await request(app).post("/users").send(userData);
    const responseSecondUser = await request(app).post("/users").send(secondUser);
    secondUser.id = responseSecondUser.body.id
    userData.id = response.body.id;
    
    expect(response.status).toBe(201);
    
    expect(response.body).toHaveProperty("id");
  });
  
  test("Should be able to login",async ()=>{
    const response = await request(app).post('/users/login').send(loginData)
    const responseSecondUser = await request(app).post('/users/login').send(loginDataSecondUser)

    headersSecondUser.token=`Bearer ${responseSecondUser.body.token}`
    headers.token=`Bearer ${response.body.token}`

    expect(response.body).toHaveProperty('token') 
    expect(response.status).toBe(200)

  })

  test("Should be able to list all users in the API", async () => {   
    
    const response = await request(app).get("/users").set('Authorization', headers.token);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });


  it("Should be able to list one", async () => {
    const response = await request(app).get(`/users/${userData.id}`).set('Authorization', headers.token);

    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
  });

  it("Should be able to show Profile", async () => {
    const response = await request(app).get(`/users/profile`).set('Authorization', headers.token);
    
    expect(response.status).toBe(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBeDefined();
    expect(response.body.email).toBeDefined();
    expect(response.body.user_name).toBeDefined();
  });

  it("Should be able to update one user", async () => {
    const response = await request(app)
      .patch(`/users/${userData.id}`)
      .send({
        name: `${userData.name} Atualizado`,
      }).set('Authorization', headers.token);
    expect(response.status).toBe(200);
    expect(response.body.name).toContain("Atualizado");
  });

  it("Should be able to delete one user", async () => {
    const response = await request(app).delete(`/users/${userData.id}`).set('Authorization', headers.token);

    expect(response.status).toBe(204);
  });

  it("Should not be able to delete one User",async()=>{
    const response = await request(app).delete(`/users/${userData.id}`).set('Authorization', headers.token);

    expect(response.status).toBe(404)
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })

  it("Should not be able to update one user", async () => {
    const response = await request(app)
      .patch(`/users/${userData.id}`)
      .send({
        name: `${userData.name} Atualizado`,
      }).set('Authorization', headers.token);
    expect(response.status).toBe(409);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  });

  it("Should not be able to list one User",async()=>{
    const response = await request(app).get(`/users/${userData.id}`).set('Authorization', headers.token);

    expect(response.status).toBe(404);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })


  it("Should not be able to show profile",async()=>{
    const response = await request(app).get(`/users/profile`).set('Authorization', headers.token);

    expect(response.status).toBe(404);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })

  it("Should not be able to create a new user with email already existing",async ()=>{

    const response = await request(app).post("/users").send(secondUser);
    
    expect(response.status).toBe(409);
    
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })

  it("Should not be able to create a new user with user_name already existing",async ()=>{

    const firstResponse = await request(app).post("/users").send({
      name:"Jenifer",
      email:"jenifer1@mail.com",
      password:"1234",
      user_name:"jenifer",
      birth_date:"18/06/1997",
      tel:"24998913379",
    });
    const response = await request(app).post("/users").send({
      name:"Jenifer",
      email:"jenifer2@mail.com",
      password:"1234",
      user_name:"jenifer",
      birth_date:"18/06/1997",
      tel:"24998913379",
    });
    
    expect(response.status).toBe(409);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })

  it("Should not be able to list all users, if user is not admin",async ()=>{
    const response = await request(app).get("/users").set('Authorization', headersSecondUser.token);

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })

  it("Should not be able to list all users, without Authorization token",async ()=>{
    const response = await request(app).get("/users")

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })

  it("Should not be able to list all users, with invalid Authorization token",async ()=>{
    const response = await request(app).get("/users").set('Authorization', headersSecondUser.token+'joj');

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })


  it("Should not be able to list one user, without Authorization token",async ()=>{
    const response = await request(app).get(`/users/${secondUser.id}`)

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })

  it("Should not be able to list one user, with invalid Authorization token",async ()=>{
    const response = await request(app).get(`/users/${secondUser.id}`).set('Authorization', headersSecondUser.token+'joj');

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })


  it("Should not be able to show user, without Authorization token",async ()=>{
    const response = await request(app).get(`/users/profile`)

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })

  it("Should not be able to show user, with invalid Authorization token",async ()=>{
    const response = await request(app).get(`/users/profile`).set('Authorization', headersSecondUser.token+'joj');

    expect(response.status).toBe(401);
    expect(response.body.status).toBeDefined();
    expect(response.body.statusCode).toBeDefined();
    expect(response.body.message).toBeDefined();
  })
  
});
