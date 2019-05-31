const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const swaggerDoc = require('./swaggerDoc');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

routes(app);
swaggerDoc(app);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(morgan('dev'));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`API listening port ${port}`);
});
