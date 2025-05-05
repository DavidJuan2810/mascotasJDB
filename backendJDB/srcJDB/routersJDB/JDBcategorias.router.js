import { Router } from 'express';
import {
  getCategoriasJDB,
  getCategoriaByIdJDB,
  createCategoriaJDB,
  updateCategoriaJDB,
  patchCategoriaJDB,
  deleteCategoriaJDB
} from '../controllersJDB/JDBcategorias.controller.js';
import { authMiddlewareJDB } from '../middleware/auth.js';

const routerCategoriaJDB = Router();

routerCategoriaJDB.get('/categorias',authMiddlewareJDB, getCategoriasJDB);
routerCategoriaJDB.get('/categorias/:id',authMiddlewareJDB, getCategoriaByIdJDB);
routerCategoriaJDB.post('/categorias',authMiddlewareJDB, createCategoriaJDB);
routerCategoriaJDB.put('/categorias/:id',authMiddlewareJDB, updateCategoriaJDB);
routerCategoriaJDB.patch('/categorias/:id',authMiddlewareJDB, patchCategoriaJDB);
routerCategoriaJDB.delete('/categorias/:id',authMiddlewareJDB, deleteCategoriaJDB);

export default routerCategoriaJDB;
