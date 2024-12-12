import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors());  // CORS middleware to allow cross-origin requests
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});

