import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getShows, getShow, postShow, postReview, getProfile } from "../controllers/tv-shows.controller.js";

export const showsRouter = Router();

/* -----------------------
PUBLIC ROUTES
----------------------- */
showsRouter.get("/", getShows);
showsRouter.get("/:id", getShow);

/* -----------------------
PROTECTED ROUTES
----------------------- */
showsRouter.get("/profile", verifyToken, getProfile);
showsRouter.post("/", verifyToken, postShow);
showsRouter.post("/:id/reviews", verifyToken, postReview);
