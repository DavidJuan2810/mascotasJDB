import { Router } from 'express';
import {
  getMascotas,
  getMascotaById,
  createMascota,
  updateMascota,
  patchMascota,
  deleteMascota
} from '../controllersJDB/JDBmascotas.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.get('/mascotas',authMiddleware, getMascotas);
router.get('/mascotas/:id',authMiddleware, getMascotaById);
router.post('/mascotas',authMiddleware, createMascota);
router.put('/mascotas/:id',authMiddleware, updateMascota);
router.patch('/mascotas/:id',authMiddleware, patchMascota);
router.delete('/mascotas/:id',authMiddleware, deleteMascota);

export default router;
