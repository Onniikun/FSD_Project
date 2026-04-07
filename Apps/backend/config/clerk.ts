import { createClerkClient } from "@clerk/express";

export const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECERT_KEY
})