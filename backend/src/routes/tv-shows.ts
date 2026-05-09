import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getShows, getShow, postShow, postReview, getProfile } from "../controllers/tv-shows.controller.js";

export const showsRouter = Router();


showsRouter.get("/", getShows); // Public route - no auth required
showsRouter.get("/profile", verifyToken, getProfile); // Protected route - auth required
showsRouter.get("/:id", getShow); // Public route - no auth required
showsRouter.post("/", verifyToken, postShow); // Protected route - auth required
showsRouter.post("/:id/reviews", verifyToken, postReview); // Protected route - auth required
