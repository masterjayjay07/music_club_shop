import { DataSource } from "typeorm";

require("dotenv").config;

const host = process.env.NODE_ENV === "production" ? "db" : "localhost";
//host indica o nome do serviço que está o banco de dados
export const AppDataSource = new DataSource({
  type: "postgres",
  host,
  port: 5432,

  username: "brendo", //process.env.POSTGRES_USER,
  password: "1234", //process.env.ṔOSTGRES_PASSWORD,
  database: "music_club_shop_db", //process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,

  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});
