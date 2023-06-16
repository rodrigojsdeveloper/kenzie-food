import { appRoutes } from "./routes";
import express from "express";
import "express-async-errors";

const app = express();

app.use(express.json());

appRoutes(app);

export { app };
