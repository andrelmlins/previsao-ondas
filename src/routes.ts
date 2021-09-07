import { Router } from 'express';
import PrevisaoOndaController from './controllers/PrevisaoOndaController';
import common from '@modules/common';
import litoral from '@modules/litoral';

const router = Router();

router.use('/onda', PrevisaoOndaController);
router.use(litoral);
router.use(common);

export default router;
