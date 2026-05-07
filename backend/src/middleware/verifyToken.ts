import { Request, Response, NextFunction } from "express";
import { auth } from "../config/firebase.js";

/* -----------------------
VERIFY FIREBASE TOKEN MIDDLEWARE
----------------------- */

// Reads the bearer token from auth header
// and verifies it with Firebase

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.headers.authorization;

    // No header = 401
    if (!authHeader) {
        res.status(401).json({
            error: "Unauthorized: no token provided."
        });
        return;
    };

    const token = authHeader.split(" ")[1];

    try {
        const decoded = await auth.verifyIdToken(token);
        // Attach the decoded user 
        (req as any).user = decoded;
        next();
    } catch {
        res.status(401).json({
            error: "Unauthorized: invalid token"
        });
    };
};