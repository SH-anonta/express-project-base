import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());

server.get('/', (req: any, res: any) => {
  console.log('AAABB');
  res.send(`Hello world!!`);
});

server.get('/names', (req: any, res: any) => {
  const names = ['A', 'B', 'C'];

  res.send(names);
});

export function startServer(host: string, port: number) {
  server.listen(port, host, () => {
    console.log(`Server started. host: ${host} port ${port}.`);
  });
}
