import express from "express";
import authController from "../controllers/auth";

const authRoute = express();

authRoute.post("/login", authController.login);
authRoute.post("/register", authController.register);
authRoute.patch("/reset", authController.reset);

export default authRoute;