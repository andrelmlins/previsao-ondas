import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import expressJSDocSwagger from 'express-jsdoc-swagger';

import routes from './routes';

const app = express();

app.use(json({ limit: '50mb' }));
app.use(cors());
expressJSDocSwagger(app)({
  info: {
    title: 'Previsão de ondas',
    version: '1.0.0',
    description: 'API para cosulta das previsões de ondas',
    license: { name: 'MIT' },
  },
  baseDir: __dirname,
  filesPattern: './**/*.ts',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
});

app.use(routes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`API listening port ${port}`));
