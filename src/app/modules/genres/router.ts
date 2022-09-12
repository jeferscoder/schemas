import { Router } from 'express';
import * as controller from './genres.controller';
import * as validator from './genres.validator';
const router = Router();

router.post('/', validator.save, controller.save);
router.get('/', controller.findAll);
router.get('/:id', validator.params, controller.findOne);
router.patch('/:id', validator.params, validator.update, controller.update);
router.delete('/:id', validator.params, controller.destroy);

export const genres = (routers: Router) => routers.use('/genres', router);
