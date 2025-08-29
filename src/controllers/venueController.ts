import { Request, Response } from "express";

export const getVenues = (req: Request, res: Response) => {
  res.json({ message: "Get all venues" });
};

export const getVenue = (req: Request, res: Response) => {
  res.json({ message: `Get venue ${req.params.id}` });
};

export const createVenue = (req: Request, res: Response) => {
  res.status(201).json({ message: "Venue created" });
};

export const updateVenue = (req: Request, res: Response) => {
  res.json({ message: `Venue ${req.params.id} updated` });
};

export const deleteVenue = (req: Request, res: Response) => {
  res.status(204).send();
};
