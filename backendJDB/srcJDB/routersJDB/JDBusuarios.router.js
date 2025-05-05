import { Router } from 'express';
import {
  getUsuariosJDB,
  getUsuarioByIdJDB,
  createUsuarioJDB,
  updateUsuarioJDB,
  patchUsuarioJDB,
  deleteUsuarioJDB
} from '../controllersJDB/JDBusuariosController.js';
import {register, login} from '../controllersJDB/authController.js'
import { authMiddlewareJDB } from '../middleware/auth.js';

const routerUsuarioJDB = Router();

// Rutas de autenticación (no protegidas)
routerUsuarioJDB.post('/register', register);
routerUsuarioJDB.post('/login', login);

routerUsuarioJDB.get('/usuariojdb',authMiddlewareJDB, getUsuariosJDB);
routerUsuarioJDB.get('/usuariojdb/:id',authMiddlewareJDB, getUsuarioByIdJDB);
routerUsuarioJDB.post('/usuariojdb',authMiddlewareJDB, createUsuarioJDB);
routerUsuarioJDB.put('/usuariojdb/:id',authMiddlewareJDB, updateUsuarioJDB);
routerUsuarioJDB.patch('/usuariojdb/:id',authMiddlewareJDB, patchUsuarioJDB);
routerUsuarioJDB.delete('/usuariojdb/:id',authMiddlewareJDB, deleteUsuarioJDB);

export default routerUsuarioJDB;
