import { Router, Request, Response } from "express";
import { shows } from "../data.js";
import { verifyToken } from "../middleware/verifyToken.js";

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
        res.status(404).json({ error: "Show not found" });
        return;
    }

    res.status(200).json(show);
});

/* ----------------------
PROTECTED ROUTES 
---------------------- */

// GET /shows/profile - Get user profile (requires authentication)
showsRouter.get("/profile", verifyToken, (req: Request, res: Response) => {
    const user = (req as any).user;
    res.status(200).json({
        uid: user.uid,
        email: user.email,
    });
});

// POST /shows - Add a new show (must be logged in)
showsRouter.post("/", verifyToken, (req: Request, res: Response) => {
    const { title, genre } = req.body;

    if (!title || !genre) {
        res.status(400).json({
            error: "Title and genre is required."
        });
    return;
    }

    const newShow = {
        id: String(shows.length + 1),
        title,
        genre,
        reviews: [],
    };

    shows.push(newShow);
    res.status(201).json(newShow);
});

// POST /shows/:id/reviews - Add a review to a show (must be logged in)
showsRouter.post("/:id/reviews", verifyToken, (req: Request, res: Response) => {
    const show = shows.find((s) => s.id === req.params.id);

    if (!show) {
        res.status(404).json({
            error: "Show not found."
        });
        return;
    }

    const { rating, comment } = req.body;

    if (!rating || !comment) {
        res.status(400).json({
            error: "Rating and comment are required."
        });
        return;
    };

    const user = (req as any).user;

    const newReview = {
        id: String(show.reviews.length + 1),
        author: user.email || user.uid,
        rating: Number(rating),
        comment,
    };

    show.reviews.push(newReview);
    res.status(201).json(newReview);
})