import express from 'express';
import cors from 'cors';
import {getDbConnection} from './db-connection-provider';
import {Connection} from 'typeorm';
import {User} from './entity/user';
import logger, {requestLogger} from './logger';
import expressWinston from 'express-winston';

const server = express();
server.use(cors());

server.use(expressWinston.logger({
  winstonInstance: requestLogger,
}));

server.get('/', (req: any, res: any) => {
  res.send(`Hello world!!`);
});

server.get('/names', (req: any, res: any) => {
  logger.info('User names accessed');
  getDbConnection()
    .then((conn) => {
      return conn.manager
        .getRepository(User)
        .find()
        .then(x => x.map(e => e.firstName));
    })
    .then(userNames => {
      res.send(userNames);
    });
});

export function startServer(host: string, port: number) {
  server.listen(port, host, () => {
    logger.info(`Server started. host: ${host} port ${port}.`);
  });
}
