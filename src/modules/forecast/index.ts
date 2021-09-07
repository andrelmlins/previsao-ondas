import { Router } from 'express';
import ForecastController from './ForecastController';

const router = Router();
const controller = new ForecastController();

router.get('/onda/cidade/:cidade', controller.readWaveForecast.bind(controller));

export default router;
