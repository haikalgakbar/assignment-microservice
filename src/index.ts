import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World!" });
});

app.listen(process.env.PORT);
