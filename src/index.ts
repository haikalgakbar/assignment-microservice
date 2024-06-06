import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth";
import checkForEmptyBody from "./middlewares/checkForEmptyBody";

const app = express();

// app.use("/", checkForEmptyBody);

app.use(express.json());
app.use(authRoutes);

app.listen(process.env.PORT);
