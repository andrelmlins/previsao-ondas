const express = require('express');

const router = express.Router();

const request = require('../services/litoral');
const { fullUrl, baseUrl } = require('../helpers/url');

router.route('/estados').get(async (req, res) => {
  try {
    const dados = await request();
    const estados = Object.keys(dados);

    res.send({ estados });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.route('/estado/:estado').get(async (req, res) => {
  try {
    const dados = await request();

    let dadosEstado = dados[req.params.estado];

    if(dadosEstado){
      const estado = {};
      estado.nome = req.params.estado;
      estado.url = fullUrl(req);
      estado.cidades = dadosEstado.reduce((total, currentValue, index) => {
        if (index > 0) {
          total.push({
            id: currentValue.id[0],
            cidade: currentValue.local[0],
            ondas: baseUrl(req, `/onda/cidade/${currentValue.id[0]}`)
          });
        }
  
        return total;
      }, []);

      res.send({ estado });
    } else {
      res.status(404).send({ mensagem: "Estado não consta" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
