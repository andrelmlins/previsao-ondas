import Forecast from './Forecast';

/**
 * Dia com previsão de onda
 * @typedef {object} Day
 * @property {string} date - Data da previsão - date
 * @property {Forecast} previsoes - Previsões por horário
 */
export type Day = {
  date: Date;
  previsoes: Forecast[];
};

/**
 * Previsão de onda na cidade
 * @typedef {object} WaveForecast
 * @property {string} cidade - Identificador da cidade
 * @property {string} dataAtualizacao - Última data de atualização
 * @property {array<Day>} dias - Previsão no dia
 */
class WaveForecast {
  cidade: string;
  dataAtualizacao: Date;
  dias: Day[];

  constructor(cidade: string, dataAtualizacao: Date, dias: Day[]) {
    this.cidade = cidade;
    this.dataAtualizacao = dataAtualizacao;
    this.dias = dias;
  }
}

export default WaveForecast;
