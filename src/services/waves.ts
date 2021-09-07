import axios from 'axios';

const ENDPOINT = 'http://ondas.cptec.inpe.br/cidades/faces/cidade.jsp?idCid=';

export const readWaveForecast = async (city: string): Promise<any> => {
  const response = await axios.get(ENDPOINT, {
    params: { idCid: city },
    responseType: 'arraybuffer',
  });

  return response.data.toString('binary');
};
