import { DataSource } from "typeorm";
import "reflect-metadata";
import path from "path";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  logging: false,
  entities: [path.join(__dirname, "./entities/*.entity.{ts,js}")],
  migrations: [path.join(__dirname, "./migrations/*.{ts,js}")],
});

export { AppDataSource };
