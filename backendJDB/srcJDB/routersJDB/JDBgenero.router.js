import { Router } from 'express';
import {
  getGeneros,
  getGeneroById,
  createGenero,
  updateGenero,
  patchGenero,
  deleteGenero
} from '../controllersJDB/JDBgenero.controller.js';
import { authMiddleware } from '../middleware/auth.js';


const router = Router();

router.get('/genero',authMiddleware, getGeneros);
router.get('/genero/:id',authMiddleware, getGeneroById);
router.post('/genero',authMiddleware, createGenero);
router.put('/genero/:id',authMiddleware, updateGenero);
router.patch('/genero/:id',authMiddleware, patchGenero);
router.delete('/genero/:id',authMiddleware, deleteGenero);

export default router;
