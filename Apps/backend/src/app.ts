import express, {Express} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { corsOptions } from "../config/cors";
import { clerkMiddleware } from "@clerk/express"

import SongItemRoute from './api/v1/routes/SongItemRoute';
import songlistRoutes from './api/v1/routes/songlistRoutes';
import { errorHandler } from "./api/v1/middleware/errorHandler";

const app: Express = express();

dotenv.config();
app.use(morgan("combined"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(clerkMiddleware());

app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});
app.use("/api/v1", SongItemRoute);
app.use("/api/v1", songlistRoutes);
app.use(errorHandler);

export default app;