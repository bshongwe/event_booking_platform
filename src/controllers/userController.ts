import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: "Get all users" });
};

export const getUser = (req: Request, res: Response) => {
  res.json({ message: `Get user ${req.params.id}` });
};

export const createUser = (req: Request, res: Response) => {
  res.status(201).json({ message: "User created" });
};

export const updateUser = (req: Request, res: Response) => {
  res.json({ message: `User ${req.params.id} updated` });
};

export const deleteUser = (req: Request, res: Response) => {
  res.status(204).send();
};
