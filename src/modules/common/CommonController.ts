import { Request, Response } from 'express';
import { baseUrl } from '@helpers/url';

class CommonController {
  showStartOptions(req: Request, res: Response): void {
    res.send({
      mensagem: 'API de previsão de ondas no Brasil',
      documentacao: baseUrl(req) + '/api-docs',
      rotas: {
        estados: `${baseUrl(req)}/litoral/estados`,
        estado: `${baseUrl(req)}/litoral/estado/:estado`,
        previsao: `${baseUrl(req)}/onda/cidade/:cidade`,
      },
    });
  }
}

export default CommonController;
