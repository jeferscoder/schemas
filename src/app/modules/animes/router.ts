import { can, is } from '@app/middlewares/acl';
import authenticated from '@app/middlewares/authenticated';
import { Router } from 'express';
import multer from 'multer';
import * as controller from './animes.controller';
import * as validator from './animes.validator';
const router = Router();

router.post(
  '/',
  authenticated,
  is(['admin', 'editor']),
  can(['create']),
  multer().single('cover'),
  validator.save,
  controller.save,
);
router.get('/', controller.findAll);
router.get('/:id', validator.params, controller.findOne);
router.patch(
  '/:id',
  authenticated,
  is(['admin', 'editor']),
  can(['edit']),
  validator.params,
  validator.update,
  controller.update,
);
router.delete(
  '/:id',
  authenticated,
  is(['admin']),
  can(['delete']),
  validator.params,
  controller.destroy,
);

export const animes = (routers: Router) => routers.use('/animes', router);
