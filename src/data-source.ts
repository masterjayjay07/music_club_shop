import { DataSource } from "typeorm";

require("dotenv").config();

const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "brendo", //process.env.POSTGRES_USER,
        password: "1234", //process.env.POSTGRES_PASSWORD,
        database: "music_club_shop_db", //process.env.POSTGRES_DB,
        synchronize: false,
        logging: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

export default AppDataSource;
