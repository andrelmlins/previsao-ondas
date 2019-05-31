const express = require('express');

const router = express.Router();

const request = require('../services/litoral');
const { fullUrl, baseUrl } = require('../helpers/url');

/**
 * @swagger
 * /litoral/estados:
 *   get:
 *     description: Retorna estados
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: estados
 */

router.route('/estados').get(async (req, res) => {
  try {
    const dados = await request();
    let estados = Object.keys(dados);

    estados = estados.reduce((total, currentValue) => {
      total.push({
        abreviatura: currentValue,
        detalhes: baseUrl(req, `/litoral/estado/${currentValue}`)
      });

      return total;
    }, []);

    res.send({ estados });
  } catch (error) {
    res.status(400).send(error.message);
  }
});


/**
 * @swagger
 * /litoral/estado/{estado}:
 *   get:
 *     description: Retorna estados
 *     produces:
 *      - application/json
*     parameters:
 *      - name: estado
 *        in: path
 *        required: true
 *     responses:
 *       200:
 *         description: cidades
 */

router.route('/estado/:estado').get(async (req, res) => {
  try {
    const dados = await request();

    let dadosEstado = dados[req.params.estado.toUpperCase()];

    if(dadosEstado){
      const estado = {};
      estado.abreviatura = req.params.estado;
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
