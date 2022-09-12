import { can, is } from '@app/middlewares/acl';
import authenticated from '@app/middlewares/authenticated';
import { Router } from 'express';
import * as controller from './genres.controller';
import * as validator from './genres.validator';
const router = Router();

router.post(
  '/',
  authenticated,
  is(['admin', 'editor']),
  can(['create']),
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

export const genres = (routers: Router) => routers.use('/genres', router);
