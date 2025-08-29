import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/userController";
import { loginUser } from "../controllers/userController";
import { authenticateJWT, requireRole } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateJWT, getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/:id", authenticateJWT, getUser);
router.put("/:id", authenticateJWT, updateUser);
router.delete("/:id", authenticateJWT, requireRole("admin"), deleteUser);

export default router;
