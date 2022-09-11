import { Router } from 'express';
import * as controller from './schemas.controller';
import * as validator from './schemas.validator';
const router = Router();

router.post('/', validator.save, controller.save);
router.get('/', controller.findAll);
router.get('/:id', validator.params, controller.findOne);
router.patch('/:id', validator.params, validator.update, controller.update);
router.delete('/:id', validator.params, controller.destroy);

export const schemas = (routers: Router) => routers.use('/schemas', router);
