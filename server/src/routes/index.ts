import { Express } from "express";

import { loginRoutes } from "./login.routes";
import { userRoutes } from "./user.routes";

const appRoutes = (app: Express): void => {
  app.use("/users", userRoutes());
  app.use("/signin", loginRoutes());
};

export { appRoutes };
