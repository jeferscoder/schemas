import { NextFunction, Request, Response } from 'express';
import { array, object, string } from 'yup';

const save = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      name: string().required(),
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
      name: string(),
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
      id: string(),
    });
    await Schema.validate(params);
    next();
  } catch (error) {
    next(error);
  }
};

export { save, params, update };
