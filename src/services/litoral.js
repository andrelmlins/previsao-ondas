const axios = require('axios');
const xml2js = require('xml2js');
const iso88592 = require('iso-8859-2');

const parser = new xml2js.Parser({ attrkey: 'ATTR' });
const ENDPOINT = 'http://ondas.cptec.inpe.br/~rondas/xml/litoraneas.xml';

async function requestLitoral() {
  const response = await axios.request({
    method: 'GET',
    url: ENDPOINT,
    responseType: 'arraybuffer',
    responseEncoding: 'binary'
  });

  let data = iso88592.decode(response.data.toString('binary'));

  const json = await new Promise((resolve, reject) =>
    parser.parseString(data, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    })
  );

  return json.litoranea;
}

module.exports = requestLitoral;
