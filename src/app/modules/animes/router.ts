import { Router } from 'express';
import multer from 'multer';
import * as controller from './animes.controller';
import * as validator from './animes.validator';
const router = Router();

router.post('/', multer().single('black'), validator.save, controller.save);
router.get('/', controller.findAll);
router.get('/:id', validator.params, controller.findOne);
router.patch('/:id', validator.params, validator.update, controller.update);
router.delete('/:id', validator.params, controller.destroy);

export const animes = (routers: Router) => routers.use('/animes', router);
