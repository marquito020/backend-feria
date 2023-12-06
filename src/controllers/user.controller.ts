import { Request, Response } from "express";
import UserService from "../services/user.service.js";

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userFound = await UserService.getUser(id);

    if ("message" in userFound) {
      return res.status(400).json(userFound);
    }

    return res.status(200).json(userFound);
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error en el server" });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Ocurrio un error en el server" });
  }
}

const addUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    console.log(user);
    const newUser = await UserService.addUser(user);
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Ocurrio un error en el server" });
  }
};

export default { getUser, getAllUsers, addUser };
