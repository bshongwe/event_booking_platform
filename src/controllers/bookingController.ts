import { Request, Response } from "express";

export const getBookings = (req: Request, res: Response) => {
  res.json({ message: "Get all bookings" });
};

export const getBooking = (req: Request, res: Response) => {
  res.json({ message: `Get booking ${req.params.id}` });
};

export const createBooking = (req: Request, res: Response) => {
  res.status(201).json({ message: "Booking created" });
};

export const updateBooking = (req: Request, res: Response) => {
  res.json({ message: `Booking ${req.params.id} updated` });
};

export const deleteBooking = (req: Request, res: Response) => {
  res.status(204).send();
};
