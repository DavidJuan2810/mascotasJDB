import { Router } from 'express';
import {
  getCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  patchCategoria,
  deleteCategoria
} from '../controllersJDB/JDBcategorias.controller.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.get('/categorias',authMiddleware, getCategorias);
router.get('/categorias/:id',authMiddleware, getCategoriaById);
router.post('/categorias',authMiddleware, createCategoria);
router.put('/categorias/:id',authMiddleware, updateCategoria);
router.patch('/categorias/:id',authMiddleware, patchCategoria);
router.delete('/categorias/:id',authMiddleware, deleteCategoria);

export default router;
