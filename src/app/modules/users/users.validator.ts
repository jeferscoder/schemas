import { NextFunction, Request, Response } from 'express';
import { array, object, string } from 'yup';

const save = async (
  { body }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      username: string().required(),
      email: string().required(),
      password: string().required(),
    });
    await Schema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};

const update = async (
  { body }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      username: string(),
      email: string(),
      password: string(),
    });
    await Schema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};

const params = async (
  { params }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      id: string().uuid(),
    });
    await Schema.validate(params);
    next();
  } catch (error) {
    next(error);
  }
};

export { save, params, update };
