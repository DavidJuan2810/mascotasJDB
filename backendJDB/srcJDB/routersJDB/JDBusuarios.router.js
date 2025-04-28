import { Router } from 'express';
import {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  patchUsuario,
  deleteUsuario
} from '../controllersJDB/JDBusuariosController.js';

const router = Router();

router.get('/usuario', getUsuarios);
router.get('/usuario/:id', getUsuarioById);
router.post('/usuario', createUsuario);
router.put('/usuario/:id', updateUsuario);
router.patch('/usuario/:id', patchUsuario);
router.delete('/usuario/:id', deleteUsuario);

export default router;
