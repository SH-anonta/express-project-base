import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import _ from 'lodash';

import userRouter from './areas/user/user.router';

import expressWinston from 'express-winston';
import logger from './logger/root-logger';
import requestLogger from './logger/request-logger';
import path from 'path';
import bodyParser from 'body-parser';

const server = express();

const staticFilesDirPath = path.join(__dirname, '../static');
server.use('/static', express.static(staticFilesDirPath));

server.use([
  cors(),
  bodyParser.urlencoded(),
  bodyParser.json()
]);

server.use(expressWinston.logger({
  winstonInstance: requestLogger,
}));

server.use('/api/users', userRouter);

// Global error handler
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const errorMsg = _.get(err, 'stack') || err;
    logger.error(errorMsg);
  res.status(500).send('Internal Server Error.')
});

export function startServer(host: string, port: number) {
  server.listen(port, host, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started. host: ${host} port ${port}.`);
    logger.info(`Server started. host: ${host} port ${port}.`);
  });
}
