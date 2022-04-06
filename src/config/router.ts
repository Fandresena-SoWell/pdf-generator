import { HomeController } from '../controllers/HomeController';
import { Router } from 'express';

const router = Router();

router.get('/', HomeController.index);
router.get('/livret-entretien', HomeController.livretEntretien);
router.get('/html2pdf', HomeController.htmlToPDF)

router.get('/pdf', HomeController.pdf);

export default router;
