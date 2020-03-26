// enables debugging ts files
// tslint:disable-next-line:no-var-requires
require('source-map-support').install();

import path from 'path';
import dotEnv from 'dotenv';

dotEnv.config();
process.env.NODE_CONFIG_DIR = path.join(__dirname, './config');

import express from 'express';
import config from 'config';

const webAppConfig = (config as any).webApp;
const app = express();

app.get('/', (req: any, res: any) => {
  res.send(`Hello world`);
});

app.listen(webAppConfig.port, '0.0.0.0', () => {
  console.log(`App listening on port ${webAppConfig.port}.`);
});
