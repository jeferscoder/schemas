import { NextFunction, Request, Response } from 'express';
import { array, date, number, object, string } from 'yup';

const save = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const Schema = object({
      cover: string().required(),
      title: string().required(),
      episodes: number().required(),
      status: string().required(),
      aired: date().required(),
      genres: array(),
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
      cover: string(),
      title: string(),
      episodes: number(),
      status: string(),
      aired: date(),
      genres: array(),
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
      id: number(),
    });
    await Schema.validate(params);
    next();
  } catch (error) {
    next(error);
  }
};

export { save, params, update };
