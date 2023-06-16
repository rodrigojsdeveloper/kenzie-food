import { Express } from "express";

import { userRoutes } from "./user.routes";

const appRoutes = (app: Express): void => {
  app.use("/users", userRoutes());
};

export { appRoutes };
