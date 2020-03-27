// required for debugging typescripts
import 'source-map-support/register';

// required for type-orm
import 'reflect-metadata';

import path from 'path';
import dotEnv from 'dotenv';

dotEnv.config();
process.env.NODE_CONFIG_DIR = path.join(__dirname, './config');

import {createDbConnection} from './db-connection-factory';
import {startServer} from './server';

import config from 'config';
const webAppConfig = (config as any).webApp;

createDbConnection().then(dbConnection => {
  return startServer(webAppConfig.host, webAppConfig.port);
});



