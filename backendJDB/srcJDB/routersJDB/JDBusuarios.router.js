import { Router } from 'express';
import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  patchUsuario,
  deleteUsuario
} from '../controllersJDB/JDBusuariosController.js';
import {register, login} from '../controllersJDB/authController.js'
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

// Rutas de autenticación (no protegidas)
router.post('/register', register);
router.post('/login', login);

router.get('/usuario',authMiddleware, getUsuarios);
router.get('/usuario/:id',authMiddleware, getUsuarioById);
router.post('/usuario',authMiddleware, createUsuario);
router.put('/usuario/:id',authMiddleware, updateUsuario);
router.patch('/usuario/:id',authMiddleware, patchUsuario);
router.delete('/usuario/:id',authMiddleware, deleteUsuario);

export default router;
