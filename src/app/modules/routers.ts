import { Router } from 'express';
import { auth } from '@modules/auth/router';
import { users } from '@modules/users/router';

const routers = Router();

// routers;
users(routers);
auth(routers);

export { routers };
