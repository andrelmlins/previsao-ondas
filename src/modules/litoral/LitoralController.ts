import { Request, Response } from 'express';
import State from '@entities/State';
import City from '@entities/City';
import { listStates } from '@services/litoral';
import { fullUrl, baseUrl } from '@helpers/url';

class LitoralController {
  /**
   * GET /litoral/estados
   * @summary Lista de estados com litoral
   * @tags litoral
   * @return {array<State>} 200 - success response - application/json
   */
  async listStates(req: Request, res: Response): Promise<void> {
    const result = await listStates();

    const states = Object.keys(result).reduce<State[]>(
      (acc, item) => [...acc, new State(item, baseUrl(req, `/litoral/estado/${item}`))],
      []
    );

    res.send(states);
  }

  /**
   * GET /litoral/estado/{estado}
   * @summary Detalhes de um estado com litoral
   * @param {string} estado.path - Abreviatura do estado
   * @tags litoral
   * @return {State} 200 - success response - application/json
   * @return {object} 404 - Bad request response - application/json
   */
  async readStateDetails(req: Request, res: Response): Promise<void> {
    const result = await listStates();

    const stateDetails = result[req.params.estado.toUpperCase()];

    if (!stateDetails) {
      res.status(404).end({ message: 'Estado não existe' });
    }

    const cidades = stateDetails.reduce((acc: City[], item: any, index: number) => {
      if (index > 0) {
        acc.push(new City(item.id[0], item.local[0], baseUrl(req, `/onda/cidade/${item.id[0]}`)));
      }

      return acc;
    }, []);

    const state = new State(req.params.estado.toUpperCase(), fullUrl(req), cidades);

    res.send(state);
  }
}

export default LitoralController;
