import { Request, Response } from "express";

export const getRoles = (req: Request, res: Response) => {
  res.json({ message: "Get all roles" });
};

export const getRole = (req: Request, res: Response) => {
  res.json({ message: `Get role ${req.params.id}` });
};

export const createRole = (req: Request, res: Response) => {
  res.status(201).json({ message: "Role created" });
};

export const updateRole = (req: Request, res: Response) => {
  res.json({ message: `Role ${req.params.id} updated` });
};

export const deleteRole = (req: Request, res: Response) => {
  res.status(204).send();
};
