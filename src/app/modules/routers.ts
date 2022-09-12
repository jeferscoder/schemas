import { Router } from 'express';
import { genres } from '@modules/genres/router';
import { animes } from '@modules/animes/router';
import { roles } from '@modules/roles/router';
import { permissions } from '@modules/permissions/router';
import { auth } from '@modules/auth/router';
import { users } from '@modules/users/router';

const routers = Router();

// routers;
genres(routers);
animes(routers);
roles(routers);
permissions(routers);
users(routers);
auth(routers);

export { routers };
