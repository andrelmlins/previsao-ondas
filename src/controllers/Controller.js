const express = require('express');

const router = express.Router();

const { baseUrl } = require('../helpers/url');

router.route('/').get(async (req, res) => {
  try {
    res.send({
        mensagem: 'API de previsão de ondas no Brasil',
        documentacao: baseUrl(req) + '/api-docs',
        rotas: {
            estados: baseUrl(req) + '/litoral/estados',
            estado: baseUrl(req) + '/litoral/estado/:estado',
            previsao: baseUrl(req) + '/onda/cidade/:cidade'
        }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
