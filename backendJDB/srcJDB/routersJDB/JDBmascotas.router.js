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
import multer from 'multer';

const storage = multer.diskStorage({
  destination: './public/img',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

routerMascotasJDB.post('/mascotas', authMiddlewareJDB, upload.single('foto'), createMascotaJDB);
routerMascotasJDB.get('/mascotas',authMiddlewareJDB, getMascotasJDB);
routerMascotasJDB.get('/mascotas/:id',authMiddlewareJDB, getMascotaByIdJDB);
routerMascotasJDB.put('/mascotas/:id',authMiddlewareJDB, upload.single('foto'), updateMascotaJDB);
routerMascotasJDB.patch('/mascotas/:id',authMiddlewareJDB, patchMascotaJDB);
routerMascotasJDB.delete('/mascotas/:id',authMiddlewareJDB, deleteMascotaJDB);

export default routerMascotasJDB;
