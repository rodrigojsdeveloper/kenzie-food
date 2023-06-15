import { UsersService } from "../services/user.service";
import { IUser } from "../interfaces/user.inteface";
import { Request, Response } from "express";

class UsersController {
  async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await new UsersService().create(data);

    return res.status(201).json(newUser);
  }
}

export { UsersController };
