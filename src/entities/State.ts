import City from './City';

/**
 * Estado
 * @typedef {object} State
 * @property {string} abreviatura - Abreviatura do estado
 * @property {string} url - Url de detalhes do estado
 * @property {array<City>} cidades - Lista de cidades do estado
 */
class State {
  abreviatura: string;
  url: string;
  cidades?: City[];

  constructor(abreviatura: string, url: string, cidades?: City[]) {
    this.abreviatura = abreviatura;
    this.url = url;
    this.cidades = cidades;
  }
}

export default State;
