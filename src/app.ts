import express from 'express';
import dotEnv from 'dotenv';
dotEnv.config();

import path from 'path';
process.env.NODE_CONFIG_DIR = path.join(__dirname, './config');
const config = require('config').default;

const webAppConfig = config.webApp;
const app = express();

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

app.listen(webAppConfig.port, () => {
  console.log(`App listening on port ${webAppConfig.port}!`)
});
