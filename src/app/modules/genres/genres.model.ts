import { PrismaClient } from '@prisma/client';

const { genre } = new PrismaClient();

const Genres = genre;

export { Genres };
