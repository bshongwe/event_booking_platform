import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: "Get all users" });
};

export const getUser = (req: Request, res: Response) => {
  res.json({ message: `Get user ${req.params.id}` });
};

export const createUser = (req: Request, res: Response) => {
  // Registration logic
  const { name, email, password, roleId } = req.body;
  if (!name || !email || !password || !roleId) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  AppDataSource.manager.findOne(User, { where: { email } }).then(existingUser => {
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = AppDataSource.manager.create(User, { name, email, password: hashedPassword, role: { id: roleId } });
    AppDataSource.manager.save(User, user).then(savedUser => {
      res.status(201).json({ id: savedUser.id, email: savedUser.email });
    }).catch(err => res.status(500).json({ message: "Error creating user", error: err }));
  });
};
// User login
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }
  const user = await AppDataSource.manager.findOne(User, { where: { email }, relations: ["role"] });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: user.id, role: user.role.name }, process.env.JWT_SECRET || "changeme", { expiresIn: "1h" });
  res.json({ token });
};

export const updateUser = (req: Request, res: Response) => {
  res.json({ message: `User ${req.params.id} updated` });
};

export const deleteUser = (req: Request, res: Response) => {
  res.status(204).send();
};
