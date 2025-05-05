import { Router } from 'express';
import {
  getMascotasJDB,
  getMascotaByIdJDB,
  createMascotaJDB,
  updateMascotaJDB,
  patchMascotaJDB,
  deleteMascotaJDB
} from '../controllersJDB/JDBmascotas.controller.js';
import { authMiddlewareJDB } from '../middleware/auth.js';

const routerMascotasJDB = Router();

routerMascotasJDB.get('/mascotas',authMiddlewareJDB, getMascotasJDB);
routerMascotasJDB.get('/mascotas/:id',authMiddlewareJDB, getMascotaByIdJDB);
routerMascotasJDB.post('/mascotas',authMiddlewareJDB, createMascotaJDB);
routerMascotasJDB.put('/mascotas/:id',authMiddlewareJDB, updateMascotaJDB);
routerMascotasJDB.patch('/mascotas/:id',authMiddlewareJDB, patchMascotaJDB);
routerMascotasJDB.delete('/mascotas/:id',authMiddlewareJDB, deleteMascotaJDB);

export default routerMascotasJDB;
