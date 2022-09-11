import { NextFunction, Request, Response } from 'express';
import * as services from './schemas.service';

const save = ({ body }: Request, response: Response, next: NextFunction) => {
  try {
    const entity = services.save(body);
    response.status(201).json(entity);
  } catch (error) {
    next(error);
  }
};

const findAll = ({}: Request, response: Response, next: NextFunction) => {
  try {
    const entity = services.findAll();
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const findOne = (
  { params }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = params;
    const entity = services.findOne(id);
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const update = (
  { body, params }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = params;
    const entity = services.update(id, body);
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const destroy = (
  { params }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = params;
    const entity = services.destroy(id);
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

export { save, findAll, findOne, update, destroy };
