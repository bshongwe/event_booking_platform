import { Request, Response } from "express";

export const getSpaces = (req: Request, res: Response) => {
  res.json({ message: "Get all spaces" });
};

export const getSpace = (req: Request, res: Response) => {
  res.json({ message: `Get space ${req.params.id}` });
};

export const createSpace = (req: Request, res: Response) => {
  res.status(201).json({ message: "Space created" });
};

export const updateSpace = (req: Request, res: Response) => {
  res.json({ message: `Space ${req.params.id} updated` });
};

export const deleteSpace = (req: Request, res: Response) => {
  res.status(204).send();
};
