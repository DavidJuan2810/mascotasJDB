import { Router } from 'express';
import {
  getRazasJDB,
  getRazaByIdJDB,
  createRazaJDB,
  updateRazaJDB,
  patchRazaJDB,
  deleteRazaJDB
} from '../controllersJDB/JDBraza.controller.js';
import { authMiddlewareJDB } from '../middleware/auth.js';


const routerRazaJDB = Router();

routerRazaJDB.get('/raza',authMiddlewareJDB, getRazasJDB);
routerRazaJDB.get('/raza/:id',authMiddlewareJDB, getRazaByIdJDB);
routerRazaJDB.post('/raza',authMiddlewareJDB, createRazaJDB);
routerRazaJDB.put('/raza/:id',authMiddlewareJDB, updateRazaJDB);
routerRazaJDB.patch('/raza/:id',authMiddlewareJDB, patchRazaJDB);
routerRazaJDB.delete('/raza/:id',authMiddlewareJDB, deleteRazaJDB);

export default routerRazaJDB;
