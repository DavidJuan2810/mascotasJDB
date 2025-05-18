import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routerUsuarioJDB from './srcJDB/routersJDB/JDBusuarios.router.js';
import routerMascotasJDB from './srcJDB/routersJDB/JDBmascotas.router.js';
import routerRazaJDB from './srcJDB/routersJDB/JDBraza.router.js';
import routerGeneroJDB from './srcJDB/routersJDB/JDBgenero.router.js';
import routerCategoriaJDB from './srcJDB/routersJDB/JDBcategorias.router.js';
import { PrismaClient } from './generated/prisma/client.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
  origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:5500', 'http://localhost:5500'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json());
app.use(express.static('../frontend')); // Archivos estáticos del frontend
app.use('/img', express.static(path.join(process.cwd(), 'public/img'))); // Servir imágenes

// Rutas
app.use('/api', routerUsuarioJDB);
app.use('/api', routerMascotasJDB);
app.use('/api', routerRazaJDB);
app.use('/api', routerGeneroJDB);
app.use('/api', routerCategoriaJDB);

// Test de conexión
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Conexión a base de datos y servidor
async function main() {
  try {
    await prisma.$connect();
    console.log('Conexión a la base de datos exitosa');
    
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

main();