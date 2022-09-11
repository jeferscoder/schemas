import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

const Users = prisma.user;

prisma.$use(async (params, next) => {
  if (params.action === 'create' && params.model === 'User')
    params.args.data.password = await hash(params.args.data.password, 10);
  return await next(params);
});

export { Users };
