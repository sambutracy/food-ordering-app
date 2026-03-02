import { auth } from "express-oauth2-jwt-bearer";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0Id: string;
      userRole: UserRole;
    }
  }
}

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

export const jwtParse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth0Id = (req as Request & { auth?: { payload?: { sub?: string } } }).auth
    ?.payload?.sub;

  if (!auth0Id) {
    return res.sendStatus(401);
  }

  req.auth0Id = auth0Id;
  return next();
};

export const requireAppUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ auth0Id: req.auth0Id });

    if (!user) {
      return res.sendStatus(401);
    }

    req.userId = user._id.toString();
    return next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
