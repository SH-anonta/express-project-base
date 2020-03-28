import express from 'express';
import cors from 'cors';
import {getDbConnection} from './db-connection-provider';

import {User} from './entity/user';
import userRouter from './areas/user/user.router';

import expressWinston from 'express-winston';
import logger from './logger/root-logger';
import requestLogger from './logger/request-logger';
import path from 'path';
import bodyParser from 'body-parser';

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const staticFilesDirPath = path.join(__dirname, '../static');
server.use('/static', express.static(staticFilesDirPath));

server.use(expressWinston.logger({
  winstonInstance: requestLogger,
}));

server.use('/api/users', userRouter);

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
    console.log(`Server started. host: ${host} port ${port}.`);
    logger.info(`Server started. host: ${host} port ${port}.`);
  });
}
