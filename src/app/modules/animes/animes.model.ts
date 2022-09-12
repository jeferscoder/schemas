import { PrismaClient } from '@prisma/client';

const { anime } = new PrismaClient();

const Animes = anime;

export { Animes };
