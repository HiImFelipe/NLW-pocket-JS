import { createGoal } from './goal';
import type { FastifyInstance } from 'fastify';

export const registerRoutes = (server: FastifyInstance) => {
  server.post('/goal', createGoal);
};
