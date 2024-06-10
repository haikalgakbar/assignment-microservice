import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/user";
import bycrypt from "bcrypt";

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body as {
        email: string;
        password: string;
      };

      if (!email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const getUser = await fetch("http://103.74.5.20:8002/api/userEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (getUser.status !== 200) {
        return res.status(500).json({ error: "Error from server." });
      }

      const user = (await getUser.json()) as IUser;

      if (
        email !== user.email ||
        !bycrypt.compareSync(password, user.password)
      ) {
        return res.status(404).json({ error: "Invalid credentials." });
      }

      const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET as string);

      return res
        .status(201)
        .json({ message: "Login success.", token: token, data: payload });
    } catch (err: any) {
      return res.status(500).json({ error: "Error from server." });
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const { email, username, password, first_name, last_name, bio } =
        req.body as {
          email: string;
          username: string;
          password: string;
          first_name: string;
          last_name: string;
          bio: string;
        };

      if (
        !email ||
        !username ||
        !password ||
        !first_name ||
        !last_name ||
        !bio
      ) {
        return res.status(400).json({ error: "Missing required fields." });
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

      if (createNewUser.status !== 201) {
        return res.status(500).json({ error: "Error from server." });
      }

      return res.status(201).json({ message: "User created." });
    } catch (err: any) {
      return res.status(500).json({ error: "Error from server." });
    }
  },
  reset: async (req: Request, res: Response) => {
    try {
      const { email, old_password, new_password } = req.body as {
        email: string;
        old_password: string;
        new_password: string;
      };

      if (!email || !old_password || !new_password) {
        return res.status(400).json({ error: "Missing required fields." });
      }

      const data = await fetch("http://103.74.5.20:8002/api/userEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (data.status !== 200) {
        return res.status(500).json({ error: "Error from server." });
      }

      const user = (await data.json()) as IUser;

      if (!bycrypt.compareSync(old_password, user.password)) {
        return res.status(404).json({ error: "Invalid credentials." });
      }

      const newUserData = {
        ...user,
        password: new_password,
      };

      const updateUser = await fetch(
        `http://103.74.5.20:8002/api/users/${user._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        }
      );

      if (updateUser.status !== 202) {
        return res.status(500).json({ error: "Error from server." });
      }

      return res.status(201).json({ message: "Password changed." });
    } catch (err: any) {
      return res.status(500).json({ error: "Error from server." });
    }
  },
};

export default authController;
