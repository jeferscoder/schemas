import { PrismaClient } from '@prisma/client';

const { permission } = new PrismaClient();

const Permissions = permission;

export { Permissions };
