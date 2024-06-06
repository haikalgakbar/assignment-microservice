import { Request, Response, NextFunction } from "express";

export default async function checkForEmptyBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (Object.keys(req.body).length === 0) {
    return res.status(403).json({ error: "Empty body" });
  }
  next();
}
