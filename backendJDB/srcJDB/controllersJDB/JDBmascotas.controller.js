import { PrismaClient } from '../../generated/prisma/client.js';
const prisma = new PrismaClient;

// Obtener todas las mascotas
export const getMascotasJDB = async (req, res) => {
  try {
    const mascotas = await prisma.mascotas.findMany({
      include: {
        usuario: true,
        raza: true,
        categoria: true,
        genero: true,
      },
    });
    res.status(200).json(mascotas);
  } catch (error) {
    console.error('Error al obtener mascotas:', error);
    res.status(500).json({ error: 'Error al obtener mascotas' });
  }
};

// Obtener una mascota por ID
export const getMascotaByIdJDB = async (req, res) => {
  const { id } = req.params;
  try {
    const mascota = await prisma.mascotas.findUnique({
      where: { id: parseInt(id) },
      include: {
        usuario: true,
        raza: true,
        categoria: true,
        genero: true,
      },
    });
    if (!mascota) return res.status(404).json({ error: 'Mascota no encontrada' });
    res.status(200).json(mascota);
  } catch (error) {
    console.error('Error al obtener mascota:', error);
    res.status(500).json({ error: 'Error al obtener mascota' });
  }
};

// Crear una nueva mascota
export const createMascotaJDB = async (req, res) => {
  const { nombre, foto, estado, usuarioId, razaId, categoriaId, generoId } = req.body;
  console.log('Datos recibidos en /api/mascotas:', { nombre, foto: foto ? `${foto.slice(0, 50)}... (length: ${foto.length})` : 'sin foto', estado, usuarioId, razaId, categoriaId, generoId });

  try {
    const nuevaMascota = await prisma.mascotas.create({
      data: { nombre, foto, estado, usuarioId, razaId, categoriaId, generoId },
    });
    console.log('Mascota creada:', nuevaMascota);
    res.status(201).json(nuevaMascota);
  } catch (error) {
    console.error('Error al crear mascota:', error);
    res.status(500).json({ error: 'Error al crear mascota', details: error.message });
  }
};

// Actualizar toda la mascota
export const updateMascotaJDB = async (req, res) => {
  const { id } = req.params;
  const { nombre, foto, estado, usuarioId, razaId, categoriaId, generoId } = req.body;
  try {
    const mascotaActualizada = await prisma.mascotas.update({
      where: { id: parseInt(id) },
      data: { nombre, foto, estado, usuarioId, razaId, categoriaId, generoId },
    });
    res.status(200).json(mascotaActualizada);
  } catch (error) {
    console.error('Error al actualizar mascota:', error);
    res.status(500).json({ error: 'Error al actualizar mascota' });
  }
};

// Actualizar parcialmente mascota
export const patchMascotaJDB = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const mascotaActualizada = await prisma.mascotas.update({
      where: { id: parseInt(id) },
      data,
    });
    res.status(200).json(mascotaActualizada);
  } catch (error) {
    console.error('Error al hacer patch a mascota:', error);
    res.status(500).json({ error: 'Error al hacer patch a mascota' });
  }
};

// Eliminar mascota
export const deleteMascotaJDB = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.mascotas.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar mascota:', error);
    res.status(500).json({ error: 'Error al eliminar mascota' });
  }
};