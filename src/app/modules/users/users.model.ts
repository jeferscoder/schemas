import { PrismaClient } from '@prisma/client';

const { user } = new PrismaClient();

const Users = user;

export { Users };
