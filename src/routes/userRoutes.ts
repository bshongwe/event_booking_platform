import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/userController";
import { loginUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
