import "@clerk/express";

declare global {
  namespace Express {
    interface Request {
      /**
       * Clerk v4.101 — req.auth is a FUNCTION, not an object.
       * Calling req.auth() returns the AuthObject.
       */
      auth: () => {
        userId?: string | null;
        sessionId?: string | null;
        getToken?: (opts?: any) => Promise<string | null>;
      };
      userId?: string | null;
    }
  }
}
