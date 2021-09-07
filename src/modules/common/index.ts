import { Router } from 'express';
import CommonController from './CommonController';

const router = Router();
const controller = new CommonController();

router.get('/', controller.showStartOptions.bind(controller));

export default router;
