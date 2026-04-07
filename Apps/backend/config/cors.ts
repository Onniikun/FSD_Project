// import dotenv from "dotenv";
// dotenv.config();

import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:5173"];
    console.log("The Front-end URL haha:",allowedOrigins)
    console.log("The origin haha:", origin)
    // Allow requests from your front-end OR requests with no origin (Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("The origin but blocked haha:",origin)
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};