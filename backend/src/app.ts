import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {showsRouter} from "./routes/shows.js";

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

export { app };