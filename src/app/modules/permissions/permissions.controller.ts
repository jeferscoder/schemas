import { NextFunction, Request, Response } from 'express';
import * as services from './permissions.service';

const save = async (
  { body }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const entity = await services.save(body);
    response.status(201).json(entity);
  } catch (error) {
    next(error);
  }
};

const findAll = async ({}: Request, response: Response, next: NextFunction) => {
  try {
    const entity = await services.findAll();
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const findOne = async (
  { params }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = params;
    const entity = await services.findOne(id);
    response.status(200).json(entity);
  } catch (error) {
    next(error);
  }
};

const update = async (
  { body, params }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = params;
    await services.update(id, body);
    response.status(204).json();
  } catch (error) {
    next(error);
  }
};

const destroy = async (
  { params }: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { id } = params;
    await services.destroy(id);
    response.status(204).json();
  } catch (error) {
    next(error);
  }
};

export { save, findAll, findOne, update, destroy };
