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
  const { nombre, estado, usuarioId, razaId, categoriaId, generoId, latitud, longitud } = req.body;
  const foto = req.file ? req.file.filename : null; // Usa solo el nombre del archivo

  console.log('Datos recibidos en /api/mascotas:', { nombre, foto, estado, usuarioId, razaId, categoriaId, generoId, latitud, longitud });

  try {
    const nuevaMascota = await prisma.mascotas.create({
      data: { nombre, foto, estado, usuarioId: parseInt(usuarioId), razaId: parseInt(razaId), categoriaId: parseInt(categoriaId), generoId: parseInt(generoId), latitud: parseFloat(latitud), longitud: parseFloat(longitud),
 },
    });
    console.log('Mascota creada:', nuevaMascota);
    res.status(201).json(nuevaMascota);
  } catch (error) {
    console.error('Error al crear mascota:', error);
    res.status(500).json({ error: 'Error al crear mascota', details: error.message });
  }
};
// Actualizar una mascota
export const updateMascotaJDB = async (req, res) => {
  const { id } = req.params;
  const { nombre, estado, usuarioId, razaId, categoriaId, generoId, latitud, longitud } = req.body;
  const foto = req.file ? req.file.filename : undefined; // Usar el nombre del archivo si se sube una nueva foto

  console.log('Datos recibidos en /api/mascotas/:id:', { id, nombre, foto, estado, usuarioId, razaId, categoriaId, generoId, latitud, longitud });

  try {
    const updatedData = {
      nombre: nombre || undefined,
      estado: estado || undefined,
      usuarioId: usuarioId ? parseInt(usuarioId) : undefined,
      razaId: razaId ? parseInt(razaId) : undefined,
      categoriaId: categoriaId ? parseInt(categoriaId) : undefined,
      generoId: generoId ? parseInt(generoId) : undefined,
      latitud: latitud ? parseFloat(latitud) : undefined,
      longitud: longitud ? parseFloat(longitud) : undefined,

    };
    if (foto) updatedData.foto = foto; // Solo actualizar foto si se sube una nueva

    // Eliminar campos undefined para evitar errores en Prisma
    Object.keys(updatedData).forEach(key => updatedData[key] === undefined && delete updatedData[key]);

    const mascotaActualizada = await prisma.mascotas.update({
      where: { id: parseInt(id) }, // Asegurar que id sea un entero
      data: updatedData,
    });
    console.log('Mascota actualizada:', mascotaActualizada);
    res.status(200).json(mascotaActualizada);
  } catch (error) {
    console.error('Error al actualizar mascota:', error);
    res.status(500).json({ error: 'Error al actualizar mascota', details: error.message });
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