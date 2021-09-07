import { Router } from 'express';
import common from '@modules/common';
import litoral from '@modules/litoral';
import forecast from '@modules/forecast';

const router = Router();

router.use(forecast);
router.use(litoral);
router.use(common);

export default router;
