import { Router } from "express";
import { getSpaces, getSpace, createSpace, updateSpace, deleteSpace } from "../controllers/spaceController";

const router = Router();

router.get("/", getSpaces);
router.post("/", createSpace);
router.get("/:id", getSpace);
router.put("/:id", updateSpace);
router.delete("/:id", deleteSpace);

export default router;
