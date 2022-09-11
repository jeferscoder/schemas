import { Router } from 'express';
import { users } from '@modules/users/router';
import { auth } from './auth/router';

const routers = Router();

// routers;
users(routers);
auth(routers);

export { routers };
