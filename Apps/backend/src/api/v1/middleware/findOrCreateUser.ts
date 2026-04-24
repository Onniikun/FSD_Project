import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../../prisma/client";

export async function findOrCreateUser(req: Request, _res: Response, next: NextFunction) {
  try {
    // Clerk v4.101 — req.auth is a FUNCTION
    const auth = req.auth?.();
    const userId = auth?.userId ?? null;

    req.userId = userId;

    if (!userId) {
      // Public request — no DB user needed
      return next();
    }

    // Ensure user exists in your DB
    let user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      user = await prisma.user.create({
        data: { id: userId }
      });
    }

    next();
  } catch (err) {
    next(err);
  }
}
