import { Router } from 'express';
import {
  getGeneros,
  getGeneroById,
  createGenero,
  updateGenero,
  patchGenero,
  deleteGenero
} from '../controllersJDB/JDBgenero.controller.js';

const router = Router();

router.get('/genero', getGeneros);
router.get('/genero/:id', getGeneroById);
router.post('/genero', createGenero);
router.put('/genero/:id', updateGenero);
router.patch('/genero/:id', patchGenero);
router.delete('/genero/:id', deleteGenero);

export default router;
