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

router.get('/', getGeneros);
router.get('/:id', getGeneroById);
router.post('/', createGenero);
router.put('/:id', updateGenero);
router.patch('/:id', patchGenero);
router.delete('/:id', deleteGenero);

export default router;
