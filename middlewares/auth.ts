import auth from "jsonwebtoken";

import { env } from 'utils'
import { Request, Response, NextFunction } from 'express'

export function apiKey(req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.headers.authorization
    const secretKey = env.get('api')
    if (authorization && authorization === secretKey) next()
    else throw new Error('401')
  } catch (err) {
    err === 401 ? res.status(401) : res.end()
  }
}

export function jwt(req: Request, _: Response, next: NextFunction) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    const error: any = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }

  const token = authorization.split(" ")[1];

  let decodedToken: any;
  try {
    decodedToken = auth.verify(token, String(env.get('jwt')));
  } catch (err: any) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodedToken) {
    const error: any = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }

  req['userId'] = decodedToken.userId;

  next();
};