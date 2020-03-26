// enables debugging ts files
// required for debugging typescripts
import 'source-map-support/register';
// required for type-orm
import 'reflect-metadata';

import path from 'path';
import dotEnv from 'dotenv';

dotEnv.config();
process.env.NODE_CONFIG_DIR = path.join(__dirname, './config');

import config from 'config';
import express from 'express';
import cors from 'cors';

const webAppConfig = (config as any).webApp;
const app = express();
app.use(cors());

app.get('/', (req: any, res: any) => {
  res.send(`Hello world`);
});

app.get('/names', (req: any, res: any) => {
  const names = ['A', 'B', 'C'];

  res.send(names);
});

app.listen(webAppConfig.port, '0.0.0.0', () => {
  console.log(`App listening on port ${webAppConfig.port}.`);
});
