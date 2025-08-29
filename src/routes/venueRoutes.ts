import { Router } from "express";
import { getVenues, getVenue, createVenue, updateVenue, deleteVenue } from "../controllers/venueController";

const router = Router();

router.get("/", getVenues);
router.post("/", createVenue);
router.get("/:id", getVenue);
router.put("/:id", updateVenue);
router.delete("/:id", deleteVenue);

export default router;
