import { Request, Response } from "express";

const authController = {
  login: (req: Request, res: Response) => {
    return res.status(200).json({ message: "Login" });
  },
  register: (req: Request, res: Response) => {},
  reset: (req: Request, res: Response) => {},
};

export default authController;
