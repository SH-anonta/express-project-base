// required for debugging typescripts
import 'source-map-support/register';

// required for type-orm
import 'reflect-metadata';

import path from 'path';
import dotEnv from 'dotenv';

dotEnv.config();
process.env.NODE_CONFIG_DIR = path.join(__dirname, './config');

import {getDbConnection} from './db-connection-provider';
import {startServer} from './server';

import config from 'config';
import logger from './logger/root-logger';
const webAppConfig = (config as any).webApp;

getDbConnection()
  .then(dbConnection => {
    return startServer(webAppConfig.host, webAppConfig.port);
  })
  .catch(err => {
    logger.error(err);
  });



