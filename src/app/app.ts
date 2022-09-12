import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { routers } from '@modules/routers';
import { handler } from '@middlewares/handler';
const server = express();

// middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors({ origin: '*' }));
server.use(morgan('dev'));

// routers
server.use(routers);

// handlers
server.use(handler);

process.on('SIGTERM', () => process.exit());
export { server };
