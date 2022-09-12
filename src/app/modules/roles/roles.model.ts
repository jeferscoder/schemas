import { PrismaClient } from '@prisma/client';

const { role } = new PrismaClient();

const Roles = role;

export { Roles };
