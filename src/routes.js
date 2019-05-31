const LitoralController = require('./controllers/LitoralController');
const PrevisaoOndaController = require('./controllers/PrevisaoOndaController');
const Controller = require('./controllers/Controller');

const initializeRoutes = (app) => {
    app.use('/litoral', LitoralController);
    app.use('/onda', PrevisaoOndaController);
    app.use('/', Controller);
}

module.exports = initializeRoutes;
