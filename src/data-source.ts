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
<<<<<<< HEAD
        host: "localhost",
        port: 5432,
        username: "brendo", //process.env.POSTGRES_USER,
        password: "1234", //process.env.POSTGRES_PASSWORD,
        database: "music_club_shop_db", //process.env.POSTGRES_DB,
=======
        url: process.env.DATABASE_URL,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
>>>>>>> main
        synchronize: false,
        logging: true,
        entities:
          process.env.NODE_ENV === "production"
            ? ["dist/src/entities/*.js"]
            : ["src/entities/*.ts"],
        migrations:
          process.env.NODE_ENV === "production"
            ? ["dist/src/migrations/*.js"]
            : ["src/migrations/*.ts"],
      });

export default AppDataSource;
