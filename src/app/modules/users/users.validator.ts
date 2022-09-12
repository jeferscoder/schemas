import { NextFunction, Request, Response } from 'express';
import { array, number, object, string } from 'yup';

const save = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      username: string().required(),
      email: string().required(),
      password: string().required(),
      permissions: array(),
      roles: array(),
    });
    const filter = await Schema.validate(request.body);
    request.filter = filter;
    next();
  } catch (error) {
    next(error);
  }
};

const update = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      username: string(),
      email: string(),
      password: string(),
      permissions: array(),
      roles: array(),
    });
    const filter = await Schema.validate(request.body);
    request.filter = filter;
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
