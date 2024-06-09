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
      const { email, username, password, first_name, last_name, bio } =
        req.body;

      if (!email || !username || !password) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newUser = {
        username,
        email,
        password,
        first_name,
        last_name,
        bio,
      };

      const createNewUser = await fetch("http://103.74.5.20:8002/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!(createNewUser.status === 201)) {
        return res.status(500).json({ error: "Error from server" });
      }

      return res.status(201).json({ message: "User created" });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  reset: async (req: Request, res: Response) => {
    try {
      const { email, new_password } = req.body as {
        email: string;
        new_password: string;
      };

      const user = await fakeFetchRequest();

      if (!user) {
        return res.status(404).json({ error: "Invalid credentials" });
      }

      if (email !== user.data.email) {
        return res.status(404).json({ error: "Invalid credentials" });
      }

      const newUserData = {
        ...user.data,
        password: new_password,
      };

      return res
        .status(201)
        .json({ message: "Password changed", data: newUserData });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
};

function fakeFetchRequest(): Promise<IFecthUser> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: user });
    }, 1000);
  });
}

export default authController;
