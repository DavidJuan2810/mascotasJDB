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

router.get('/categorias', getCategorias);
router.get('/categorias/:id', getCategoriaById);
router.post('/categorias', createCategoria);
router.put('/categorias/:id', updateCategoria);
router.patch('/categorias/:id', patchCategoria);
router.delete('/categorias/:id', deleteCategoria);

export default router;
