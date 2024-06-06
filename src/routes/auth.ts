import express from "express";
import authController from "../controllers/auth";

const authRoute = express();

authRoute.post("/auth/login", authController.login);
authRoute.post("/auth/register", authController.register);
authRoute.post("/auth/reset", authController.reset);

export default authRoute;