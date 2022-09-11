import { Router } from 'express';
import { users } from '@modules/users/router';

const routers = Router();

// routers;
users(routers);

export { routers };
