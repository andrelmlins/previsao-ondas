const express = require('express');
const cheerio = require('cheerio');

const router = express.Router();
const request = require('../services/ondas');

router.route('/cidade/:cidade').get(async (req, res) => {
  try {
    const dados = await request(req.params.cidade);
    const cidade = { dias: [] };

    const $ = cheerio.load(dados);
    $('#prev_ond').each((i, el) => {
      const dia = { previsoes: [] };

      let diaNome = $(el).find('#tit').text().trim().replace(/\s+/g,' ').split(' ');
      dia.dia = diaNome[1];

      $(el).find('#ond').each((i, el) => {
          const altura = $(el).children().find('b').text().split(' ');
          const vento = $(el).children().find('i').text().split(' ');

          dia.previsoes.push({
            altura: {
              velocidade: parseFloat(altura[0]),
              direcao: altura[1]
            },
            vento: {
              altura: parseFloat(vento[0]),
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
