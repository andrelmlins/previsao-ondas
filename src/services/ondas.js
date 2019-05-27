const axios = require('axios');
const iso88592 = require('iso-8859-2');

const ENDPOINT = 'http://ondas.cptec.inpe.br/cidades/faces/cidade.jsp?idCid=';

async function requestOnda(cidade) {
  const response = await axios.request({
    method: 'GET',
    url: ENDPOINT + cidade,
    responseType: 'arraybuffer',
    responseEncoding: 'binary'
  });

  let data = iso88592.decode(response.data.toString('binary'));

  return data;
}

module.exports = requestOnda;
