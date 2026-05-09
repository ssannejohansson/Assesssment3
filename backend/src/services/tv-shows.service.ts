import { shows, Show, Review } from "../data.js";

/* -----------------------
TYPES - SERVICE INPUTS
----------------------- */
interface CreateShowInput {
  title: string;
  description: string;
  genre: string;
  year: number;
  imageUrl: string;
  createdBy: string;
}

interface AddReviewInput {
  title?: string;
  rating: number;
  comment: string;
  author: string;
}

/* -----------------------
SERVICE METHODS
----------------------- */

// Returns all shows
export const getAllShows = (): Show[] => {
  return shows;
};

// Returns a single show by id, or null if not found
export const getShowById = (id: string): Show | null => {
  return shows.find((s) => s.id === id) ?? null;
};

// Creates a new show and adds it to the store
export const createShow = (input: CreateShowInput): Show => {
  const newShow: Show = {
    id: String(shows.length + 1),
    title: input.title,
    description: input.description,
    genre: input.genre,
    year: input.year,
    imageUrl: input.imageUrl,
    reviews: [],
    createdAt: new Date().toISOString(),
    createdBy: input.createdBy,
  };

  shows.push(newShow);
  return newShow;
};

// Adds a review to a show — returns the review or null if show not found
export const addReview = (
  showId: string,
  input: AddReviewInput,
): Review | null => {
  const show = shows.find((s) => s.id === showId);

  if (!show) return null;

  const newReview: Review = {
    id: String(show.reviews.length + 1),
    title: input.title,
    rating: input.rating,
    comment: input.comment,
    author: input.author,
    createdAt: new Date().toISOString(),
  };

  show.reviews.push(newReview);
  return newReview;
};
