import { Router } from 'express';
import {
  getMascotas,
  getMascotaById,
  createMascota,
  updateMascota,
  patchMascota,
  deleteMascota
} from '../controllersJDB/JDBmascotas.controller.js';

const router = Router();

router.get('/mascotas', getMascotas);
router.get('/mascotas/:id', getMascotaById);
router.post('/mascotas', createMascota);
router.put('/mascotas/:id', updateMascota);
router.patch('/mascotas/:id', patchMascota);
router.delete('/mascotas/:id', deleteMascota);

export default router;
