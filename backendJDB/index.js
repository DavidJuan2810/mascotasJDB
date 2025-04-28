import express from 'express';
import cors from 'cors';
import usuariosRoutes from './srcJDB/routersJDB/JDBusuarios.router.js';
import mascotasRoutes from './srcJDB/routersJDB/JDBmascotas.router.js';
import razaRoutes from './srcJDB/routersJDB/JDBraza.router.js';
import generoRoutes from './srcJDB/routersJDB/JDBgenero.router.js';
import categoriasRoutes from './srcJDB/routersJDB/JDBcategorias.router.js';
import { PrismaClient } from './generated/prisma/client.js';  

const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/mascotas', mascotasRoutes);
app.use('/api/razas', razaRoutes);
app.use('/api/generos', generoRoutes);
app.use('/api/categorias', categoriasRoutes);

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
