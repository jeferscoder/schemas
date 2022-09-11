import { PrismaClient } from '@prisma/client';

const { schema } = new PrismaClient();

const Schemas = schema;

export { Schemas };
