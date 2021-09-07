/**
 * Cidade
 * @typedef {object} City
 * @property {string} id - Identificador da cidade
 * @property {string} url - Nome da cidade
 * @property {string} ondas - Url com detalhes das ondas da cidade
 */
class City {
  id: string;
  name: string;
  ondas: string;

  constructor(id: string, name: string, ondas: string) {
    this.id = id;
    this.name = name;
    this.ondas = ondas;
  }
}

export default City;
