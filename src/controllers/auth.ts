import { Request, Response } from "express";

const authController = {
  login: (req: Request, res: Response) => {
    try {
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  register: (req: Request, res: Response) => {},
  reset: (req: Request, res: Response) => {},
};

export default authController;
