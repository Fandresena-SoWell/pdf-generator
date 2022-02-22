import { HomeController } from '../controllers/HomeController';
import { Router } from 'express';

const router = Router();

router.get('/', HomeController.index);

router.get('/pdf', HomeController.pdf);

export default router;
