import { Router } from 'express';
import { getCentres, createCentre } from '../controllers/centreController.js';
const router = Router();
router.get('/', getCentres);
router.post('/', createCentre);
export default router;
