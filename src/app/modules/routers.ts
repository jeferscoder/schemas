import { Router } from 'express';
import { schemas } from './schemas/router';

const routers = Router();

// routers;
schemas(routers);

export { routers };
