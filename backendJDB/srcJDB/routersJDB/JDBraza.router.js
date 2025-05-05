import { Router } from 'express';
import {
  getRazas,
  getRazaById,
  createRaza,
  updateRaza,
  patchRaza,
  deleteRaza
} from '../controllersJDB/JDBraza.controller.js';
import { authMiddleware } from '../middleware/auth.js';


const router = Router();

router.get('/raza',authMiddleware, getRazas);
router.get('/raza/:id',authMiddleware, getRazaById);
router.post('/raza',authMiddleware, createRaza);
router.put('/raza/:id',authMiddleware, updateRaza);
router.patch('/raza/:id',authMiddleware, patchRaza);
router.delete('/raza/:id',authMiddleware, deleteRaza);

export default router;
