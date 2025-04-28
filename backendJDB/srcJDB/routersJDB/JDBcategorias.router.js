import { Router } from 'express';
import {
  getCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  patchCategoria,
  deleteCategoria
} from '../controllersJDB/JDBcategorias.controller.js';

const router = Router();

router.get('/', getCategorias);
router.get('/:id', getCategoriaById);
router.post('/', createCategoria);
router.put('/:id', updateCategoria);
router.patch('/:id', patchCategoria);
router.delete('/:id', deleteCategoria);

export default router;
