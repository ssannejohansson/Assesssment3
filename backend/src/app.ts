import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { showsRouter } from "./routes/tv-shows.js";
import { verifyToken } from "./middleware/verifyToken.js";
import { getProfile } from "./controllers/tv-shows.controller.js";

dotenv.config();

/* ----------------------
APP SETUP
---------------------- */

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5500",
    credentials: true,
})
);


/* ----------------------
ROUTES
---------------------- */
app.use("/shows", showsRouter);
app.get("/profile", verifyToken, getProfile); // Protected route - auth required

export { app };