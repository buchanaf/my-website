import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import render from './controllers/render';
import favicon from 'serve-favicon';
import * as API from './controllers/api';

const port = process.env.PORT || 3000;
const app = new express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (global.__DEVELOPMENT) {
  app.use(express.static(path.join(__dirname, '..')));
  app.use(favicon(path.join(__dirname, '../src/assets', 'favicon.ico')));
}

router.post('/message', API.message);

app.use('/api', router)
app.use(render);

app.listen(port, function () {
  console.log('Server listening on: ' + port);
});