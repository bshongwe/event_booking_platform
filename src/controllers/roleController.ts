import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Role } from "../entities/Role";

export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await AppDataSource.manager.find(Role);
    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: "Error fetching roles", error: err });
  }
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
