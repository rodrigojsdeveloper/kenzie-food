import { Router } from "express";

import { UsersController } from "../controllers/user.controller";

const routes = Router();

const userRoutes = (): Router => {
  routes.post("/signup", new UsersController().create);

  return routes;
};

export { userRoutes };
