import 'source-map-support/register';

import path from 'path';
import dotEnv from 'dotenv';

dotEnv.config();
process.env.NODE_CONFIG_DIR = path.join(__dirname, './config');

import express from 'express';
import config from 'config';

const webAppConfig = (config as any).webApp;
const app = express();

app.get('/', (req: any, res: any) => {
  console.log('ABC');
  res.send('Za Warudo');
});

app.listen(webAppConfig.port, () => {
  console.log(`App listening on port ${webAppConfig.port}.`);
});
