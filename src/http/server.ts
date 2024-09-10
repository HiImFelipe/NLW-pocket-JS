import fastify from 'fastify';
import { registerRoutes } from './routes';

const server = fastify();
const port = 3000;

registerRoutes(server);

server.listen({ port }).then(() => {
  console.log(`Server listening at localhost:${port}`);
});
