import express from 'express';
import config from 'config';
import dotEnv from 'dotenv';

dotEnv.config();

const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

console.log('loading config\n', config);
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
