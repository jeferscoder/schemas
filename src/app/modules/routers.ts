import { Router } from 'express';
import { roles } from '@modules/roles/router';
import { permissions } from '@modules/permissions/router';
import { auth } from '@modules/auth/router';
import { users } from '@modules/users/router';

const routers = Router();

// routers;
roles(routers);
permissions(routers);
users(routers);
auth(routers);

export { routers };
