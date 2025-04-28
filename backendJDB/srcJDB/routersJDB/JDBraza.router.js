import { Router } from 'express';
import {
  getRazas,
  getRazaById,
  createRaza,
  updateRaza,
  patchRaza,
  deleteRaza
} from '../controllersJDB/JDBraza.controller.js';

const router = Router();

router.get('/raza', getRazas);
router.get('/raza/:id', getRazaById);
router.post('/raza', createRaza);
router.put('/raza/:id', updateRaza);
router.patch('/raza/:id', patchRaza);
router.delete('/raza/:id', deleteRaza);

export default router;
