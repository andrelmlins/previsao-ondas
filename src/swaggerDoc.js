const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        info:{
            title: 'API Previsão de ondas',
            version: '1.0.0',
            descrition: 'API para cosulta das previsões de ondas'
        },
        basePath: '/'
    },
    apis: ['src/**/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
}
