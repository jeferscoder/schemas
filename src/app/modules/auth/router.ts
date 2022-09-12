import express, { Router } from 'express';
import * as controller from './auth.controller';
import * as validator from './auth.validator';
import { can } from '@middlewares/acl';
import authenticated from '@middlewares/authenticated';
const router = express.Router();

router.post('/signin', validator.signin, controller.signin);
router.post('/signup', validator.signup, controller.signup);
router.get(
  '/',
  authenticated,
  can(['create', 'edit', 'findAll', 'delete']),
  controller.auth,
);

export default router;

export const auth = (routers: Router) => routers.use('/auth', router);
