import express from 'express';
import router from '@config/router';
import path from 'path';

const createServer = (): express.Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.set('views', path.resolve('src/views'));
  app.set('view engine', 'ejs');

  app.disable('x-powered-by');

  app.use('/', router);

  return app;
};

export { createServer };
