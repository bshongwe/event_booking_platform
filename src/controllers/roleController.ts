import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Role } from "../entities/Role";

export const getRoles = async (req: Request, res: Response) => {
  try {
    // Pagination
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Filtering (by name)
    const name = req.query.name as string | undefined;
    const where: any = {};
    if (name) {
      where.name = name;
    }

    // Sorting
    const sortField = (req.query.sortField as string) || "id";
    const sortOrder = (req.query.sortOrder as string) === "desc" ? "DESC" : "ASC";

    const [roles, total] = await AppDataSource.getRepository(Role).findAndCount({
      where,
      order: { [sortField]: sortOrder },
      skip,
      take: limit,
    });

    res.json({
      data: roles,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
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
