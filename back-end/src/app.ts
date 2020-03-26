// required for debugging typescripts
import 'source-map-support/register';
// required for type-orm

import path from 'path';
import dotEnv from 'dotenv';

dotEnv.config();
process.env.NODE_CONFIG_DIR = path.join(__dirname, './config');
import config from 'config';
const webAppConfig = (config as any).webApp;

import {startServer} from './server';

startServer(webAppConfig.host, webAppConfig.port);
