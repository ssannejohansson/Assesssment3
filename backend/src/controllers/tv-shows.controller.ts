import { Request, Response } from "express";
import { getAllShows, getShowById, createShow, addReview } from "../services/tv-shows.service.js";

/* -----------------------
GET ALL SHOWS
Public - no auth required
----------------------- */
export const getShows = (req: Request, res: Response): void => {
  const shows = getAllShows();
  res.status(200).json(shows);
};

/* -----------------------
GET SHOW BY ID
Public - no auth required
----------------------- */
export const getShow = (req: Request, res: Response): void => {
  const show = getShowById(req.params.id);

  if (!show) {
    res.status(404).json({ error: "Show not found" });
    return;
  }

  res.status(200).json(show);
};

/* -----------------------
CREATE SHOW
Protected - requires valid firebase token
----------------------- */
export const postShow = (req: Request, res: Response): void => {
  const { title, description, genre, year, imageUrl } = req.body;
  const user = (req as any).user;

  if (!title || !description || !genre || !year || !imageUrl) {
    res
      .status(400)
      .json({
        error: "title, description, genre, year and imageUrl are required",
      });
    return;
  }

  const newShow = createShow({
    title,
    description,
    genre,
    year: Number(year),
    imageUrl,
    createdBy: user.uid,
  });

  res.status(201).json(newShow);
};

/* -----------------------
ADD REVIEW
Protected - requires valid firebase token
----------------------- */
export const postReview = (req: Request, res: Response): void => {
  const { title, rating, comment } = req.body;
  const user = (req as any).user;

  if (!rating || !comment) {
    res.status(400).json({ error: "rating and comment are required" });
    return;
  }

  const review = addReview(req.params.id, {
    title,
    rating: Number(rating),
    comment,
    author: user.email || user.uid,
  });

  if (!review) {
    res.status(404).json({ error: "Show not found" });
    return;
  }

  res.status(201).json(review);
};

/* -----------------------
GET PROFILE
Public - no auth required
----------------------- */
export const getProfile = (req: Request, res: Response): void => {
  const user = (req as any).user;
  res.status(200).json({
    uid: user.uid,
    email: user.email,
  });
};
