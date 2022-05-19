import { DataSource } from "typeorm";

require("dotenv").config();

const host = process.env.NODE_ENV === "production" ? "db" : "localhost";
//host indica o nome do serviço que está o banco de dados
const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  logging: true,
  synchronize: false,

  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

export default AppDataSource;
