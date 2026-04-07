// import dotenv from "dotenv";
// dotenv.config();

import { CorsOptions } from "cors";

const allowedOrigins = [process.env.FRONTEND_URL];
console.log(allowedOrigins)
export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    // Allow requests from your front-end OR requests with no origin (Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};