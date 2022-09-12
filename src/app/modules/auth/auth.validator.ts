import { NextFunction, Request, Response } from 'express';
import { object, string } from 'yup';

export const signin = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      email: string().email().required(),
      password: string().required(),
    });
    const filter = await Schema.validate(request.body);
    request.filter = filter;
    next();
  } catch (error) {
    next(error);
  }
};

export const signup = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      username: string().required(),
      email: string().email().required(),
      password: string().required(),
    });
    const filter = await Schema.validate(request.body);
    request.filter = filter;
    next();
  } catch (error) {
    next(error);
  }
};
