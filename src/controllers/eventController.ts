import { Request, Response } from "express";

export const getEvents = (req: Request, res: Response) => {
  res.json({ message: "Get all events" });
};

export const getEvent = (req: Request, res: Response) => {
  res.json({ message: `Get event ${req.params.id}` });
};

export const createEvent = (req: Request, res: Response) => {
  res.status(201).json({ message: "Event created" });
};

export const updateEvent = (req: Request, res: Response) => {
  res.json({ message: `Event ${req.params.id} updated` });
};

export const deleteEvent = (req: Request, res: Response) => {
  res.status(204).send();
};
