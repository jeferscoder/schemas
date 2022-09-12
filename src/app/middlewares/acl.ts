import * as userRepository from '@modules/users/users.repository';
import { Handling } from '@utils/Handling';
import { NextFunction, Request, Response } from 'express';

export const can = (permissions: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.user as { id: string };
      const check = await userRepository.findOne(id);
      if (!check) throw new Handling('user does not exits', 400);
      const user = await userRepository.findByPk(id);
      const exits = user.permissions.some((rol) => permissions.includes(rol));
      if (!exits)
        throw new Handling(
          "you don't have permission to access this resource",
          403,
        );
      next();
    } catch (error) {
      next(error);
    }
  };
};

export const is = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.user as { id: string };
      const check = await userRepository.findOne(id);
      if (!check) throw new Handling('user does not exits', 400);
      const user = await userRepository.findByPk(id);
      const exits = user.roles.some((rol) => roles.includes(rol));
      if (!exits)
        throw new Handling(
          "you don't have permission to access this resource",
          403,
        );

      next();
    } catch (error) {
      next(error);
    }
  };
};
