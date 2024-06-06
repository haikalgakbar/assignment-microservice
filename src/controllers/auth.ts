import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IFecthUser, user } from "../db/user";

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const user = await fakeFetchRequest();

      if (email !== user.data.email || password !== user.data.password) {
        return res.status(404).json({ error: "Invalid credentials" });
      }

      const payload = jwt.sign(
        {
          _id: user.data._id,
          username: user.data.username,
          email: user.data.email,
          first_name: user.data.first_name,
          last_name: user.data.last_name,
        },
        process.env.JWT_SECRET as string
      );

      return res
        .status(201)
        .json({ message: "Login success.", token: payload });
    } catch (err: any) {
      return res.status(500).json({ error: err.message, data: err.stack });
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const { email, username, password } = req.body;

      if (!email || !username || !password) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newUser = {
        _id: 1,
        username,
        password,
        email,
        created_at: new Date(),
        updated_at: new Date(),
        first_name: "John",
        last_name: "Doe",
        bio: "I am user1",
        payment_details: "123456789",
      };

      return res.status(201).json({ message: "User created", data: newUser });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  reset: (req: Request, res: Response) => {},
};

function fakeFetchRequest(): Promise<IFecthUser> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: user });
    }, 1000);
  });
}

export default authController;
