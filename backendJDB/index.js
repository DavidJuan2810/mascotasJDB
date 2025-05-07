import express from 'express';
import cors from 'cors';
import routerUsuarioJDB from './srcJDB/routersJDB/JDBusuarios.router.js';
import routerMascotasJDB from './srcJDB/routersJDB/JDBmascotas.router.js';
import routerRazaJDB from './srcJDB/routersJDB/JDBraza.router.js';
import routerGeneroJDB from './srcJDB/routersJDB/JDBgenero.router.js';
import routerCategoriaJDB from './srcJDB/routersJDB/JDBcategorias.router.js';
import { PrismaClient } from './generated/prisma/client.js'; 
import dotenv from 'dotenv'; 

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin:  ['http://127.0.0.1:5500', 'http://localhost:5500'], // Puerto donde se ejecuta el frontend
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.static('../frontend')); // Sirve los archivos estáticos del frontend

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
