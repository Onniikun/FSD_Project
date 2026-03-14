import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { corsOptions } from "../config/cors";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

const PORT: string | 3000 = process.env.PORT || 3000;

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is reachable" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
