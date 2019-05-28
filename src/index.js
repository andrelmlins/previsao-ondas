const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const LitoralController = require('./controllers/LitoralController');
const PrevisaoOndaController = require('./controllers/PrevisaoOndaController');
const Controller = require('./controllers/Controller');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/litoral', LitoralController);
app.use('/onda', PrevisaoOndaController);
app.use('/', Controller);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`API listening port ${port}`);
});
