import { Router, Request, Response } from "express";
import { shows } from "../data.js";

export const showsRouter = Router();

/* ----------------------
PUBLIC ROUTES 
---------------------- */

// GET all shows
showsRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json(shows);
});

// GET show by ID
showsRouter.get("/:id", (req: Request, res: Response) => {
    const show = shows.find((s) => s.id === req.params.id);

    if (!show) {
        return res.status(404).json({ message: "Show not found" });
        return;
    }
    
    res.status(200).json(show);
});