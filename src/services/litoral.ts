import axios from 'axios';
import xml2js from 'xml2js';

const parser = new xml2js.Parser({ attrkey: 'ATTR' });
const ENDPOINT = 'http://ondas.cptec.inpe.br/~rondas/xml/litoraneas.xml';

export const listStates = async (): Promise<any> => {
  const response = await axios.get(ENDPOINT, { responseType: 'arraybuffer' });

  let data = response.data.toString('binary');

  const json = await new Promise<any>((resolve, reject) =>
    parser.parseString(data, (err: Error, result: any) => {
      if (err) reject(err);
      else resolve(result);
    })
  );

  return json.litoranea;
};
