import { Router } from "express";

import { UsersController } from "../controllers/user.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";

import { userSchema } from "../schemas/user.schema";

const routes = Router();

const userRoutes = (): Router => {
  routes.post(
    "/signup",
    schemaValidationMiddleware(userSchema),
    new UsersController().create
  );

  return routes;
};

export { userRoutes };
