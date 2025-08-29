import { Router } from "express";
import { getRoles, getRole, createRole, updateRole, deleteRole } from "../controllers/roleController";

const router = Router();

router.get("/", getRoles);
router.post("/", createRole);
router.get("/:id", getRole);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

export default router;
