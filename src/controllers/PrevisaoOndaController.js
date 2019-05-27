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

      $(el)
        .find('#ond')
        .each((i, el) => {
          dia.previsoes.push({
            altura: $(el)
              .children()
              .find('b')
              .text(),
            vento: $(el)
              .children()
              .find('i')
              .text()
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
