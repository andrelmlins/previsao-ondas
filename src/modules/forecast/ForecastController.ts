import { Request, Response } from 'express';
import { readWaveForecast } from '@services/waves';
import cheerio from 'cheerio';
import WaveForecast, { Day } from '@entities/WaveForecast';
import Forecast from '@entities/Forecast';

class ForecastController {
  private cleanString(value: string): string {
    return value.trim().replace(/\s+/g, ' ');
  }

  private readWaveImage(image?: string): string | undefined {
    const imageMap = {
      'Fraco.gif': 'fraca',
      'Forte.gif': 'forte',
      'Moderado.gif': 'moderada',
      'MuitoForte.gif': 'muito forte',
    };

    const imageName = image && image.split('/').slice(-1).pop();

    return imageName && imageMap[imageName as keyof typeof imageMap];
  }

  /**
   * GET /onda/cidade/{cidade}
   * @summary Previsão de ondas na cidade
   * @param {string} cidade.path - Identificador da cidade
   * @tags litoral
   * @return {WaveForecast} 200 - success response - application/json
   */
  async readWaveForecast(req: Request, res: Response): Promise<void> {
    const dados = await readWaveForecast(req.params.cidade);

    const $ = cheerio.load(dados);
    const days: Day[] = [];

    $('#prev_ond').each((i, el) => {
      const forecasts: Forecast[] = [];

      $(el)
        .find('#ond')
        .each((i, el) => {
          const altura = $(el).children().find('b').text().split(' ');
          const vento = $(el).children().find('i').text().split(' ');
          const image = $(el).children().find('img').attr('src');
          const horario = this.cleanString($(el).children().text())
            .split(' ')[0]
            .replace('Z', ':00:00');

          forecasts.push(
            new Forecast(
              horario,
              { distancia: parseFloat(altura[0]), direcao: altura[1] },
              { velocidade: parseFloat(vento[0]), direcao: vento[1] },
              this.readWaveImage(image)
            )
          );
        });

      const dateSplitted = this.cleanString($(el).find('#tit').text()).split(' ')[1].split('-');
      days.push({
        date: new Date(
          parseInt(dateSplitted[2]),
          parseInt(dateSplitted[1]) - 1,
          parseInt(dateSplitted[0])
        ),
        previsoes: forecasts,
      });
    });

    const dataAtualizacao = this.cleanString($('#atu').text()).split(' ');
    const waveforecast = new WaveForecast(
      this.cleanString($('#subcid').text()).split(' ')[0],
      new Date(`${dataAtualizacao[1]} ${dataAtualizacao[2]} ${dataAtualizacao[3]} 00:00:00`),
      days
    );

    res.send(waveforecast);
  }
}

export default ForecastController;
