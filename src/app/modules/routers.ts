import { Router } from 'express';

import { schemas } from '@modules/schemas/router';

const routers = Router();

// routers;
schemas(routers);

export { routers };
