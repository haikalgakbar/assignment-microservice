import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth";

const app = express();

app.use(express.json());
app.use(authRoutes);

app.listen(process.env.PORT);
