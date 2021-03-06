const express = require('express');
const cheerio = require('cheerio');

const router = express.Router();
const request = require('../services/ondas');
const { cleanString } = require('../helpers/clean');
const { forcaImagem } = require('../helpers/parsers');

/**
 * @swagger
 * /onda/cidade/{cidade}:
 *   get:
 *     description: Retorna previsão de ondas
 *     produces:
 *      - application/json
*     parameters:
 *      - name: cidade
 *        in: path
 *        required: true
 *     responses:
 *       200:
 *         description: ondas
 */


router.route('/cidade/:cidade').get(async (req, res) => {
  try {
    const dados = await request(req.params.cidade);
    const cidade = { cidade: '', dataAtualizacao: '', dias: []};

    const $ = cheerio.load(dados);

    let dataAtualizacao = cleanString($('#atu').text()).split(' ');
    dataAtualizacao = `${dataAtualizacao[1]} ${dataAtualizacao[2]} ${dataAtualizacao[3]} 00:00:00`;
    cidade.dataAtualizacao = new Date(dataAtualizacao);

    cidade.cidade = cleanString($('#subcid').text()).split(' ')[0];

    $('#prev_ond').each((i, el) => {
      const dia = { dia: '', previsoes: [] };

      let diaNome = cleanString($(el).find('#tit').text()).split(' ')[1].split('-');
      dia.dia = new Date(diaNome[2], parseInt(diaNome[1]) - 1, diaNome[0])
      
      $(el).find('#ond').each((i, el) => {
          const altura = $(el).children().find('b').text().split(' ');
          const vento = $(el).children().find('i').text().split(' ');
          const forca = $(el).children().find('img').attr('src');
          const horario = cleanString($(el).children().text()).split(' ')[0].replace('Z', ':00:00');

          dia.previsoes.push({
            horario,
            forca: forcaImagem(forca),
            altura: {
              distancia: parseFloat(altura[0]),
              direcao: altura[1],
            },
            vento: {
              velocidade: parseFloat(vento[0]),
              direcao: vento[1]
            }
          });
        });

      cidade.dias.push(dia);
    });

    res.send(cidade);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
