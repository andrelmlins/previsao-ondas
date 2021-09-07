import { Router } from 'express';
import LitoralController from './LitoralController';

const router = Router();
const controller = new LitoralController();

router.get('/litoral/estados', controller.listStates.bind(controller));
router.get('/litoral/estado/:estado', controller.readStateDetails.bind(controller));

export default router;
