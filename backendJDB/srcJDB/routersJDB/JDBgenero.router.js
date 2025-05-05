import { Router } from 'express';
import {
  getGenerosJDB,
  getGeneroByIdJDB,
  createGeneroJDB,
  updateGeneroJDB,
  patchGeneroJDB,
  deleteGeneroJDB
} from '../controllersJDB/JDBgenero.controller.js';
import { authMiddlewareJDB } from '../middleware/auth.js';


const routerGeneroJDB = Router();

routerGeneroJDB.get('/genero',authMiddlewareJDB, getGenerosJDB);
routerGeneroJDB.get('/genero/:id',authMiddlewareJDB, getGeneroByIdJDB);
routerGeneroJDB.post('/genero',authMiddlewareJDB, createGeneroJDB);
routerGeneroJDB.put('/genero/:id',authMiddlewareJDB, updateGeneroJDB);
routerGeneroJDB.patch('/genero/:id',authMiddlewareJDB, patchGeneroJDB);
routerGeneroJDB.delete('/genero/:id',authMiddlewareJDB, deleteGeneroJDB);

export default routerGeneroJDB;
