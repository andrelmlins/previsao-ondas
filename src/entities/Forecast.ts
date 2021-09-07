/**
 * Altura da onda
 * @typedef {object} Height
 * @property {number} distancia - Distância da altura da onda
 * @property {string} direcao - Direção da onda
 */
type Height = {
  distancia: number;
  direcao: string;
};

/**
 * Detalhes do vento
 * @typedef {object} Wind
 * @property {string} velocidade - Velocidade do vento
 * @property {string} direcao - Direção do vento
 */
type Wind = {
  velocidade: number;
  direcao: string;
};

/**
 * Previsão de onda em um horário do dia
 * @typedef {object} Forecast
 * @property {string} horario - Horário da previsão
 * @property {string} forca - Força da onda
 * @property {Height} altura - Detalhes da altura da onda
 * @property {Wind} vento - Detalhes do vento
 */
class Forecast {
  horario: string;
  forca?: string;
  altura: Height;
  vento: Wind;

  constructor(horario: string, altura: Height, vento: Wind, forca?: string) {
    this.horario = horario;
    this.forca = forca;
    this.altura = altura;
    this.vento = vento;
  }
}

export default Forecast;
