import { PrismaClient } from '../../generated/prisma/client.js';  
const prisma = new PrismaClient;
// Obtener todos los géneros
export const getGenerosJDB = async (req, res) => {
  try {
    const generos = await prisma.genero.findMany();
    res.json(generos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los géneros.' });
  }
};

// Obtener un género por ID
export const getGeneroByIdJDB = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await prisma.genero.findUnique({
      where: { id: parseInt(id) }
    });

    if (!genero) {
      return res.status(404).json({ message: 'Género no encontrado.' });
    }

    res.json(genero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el género.' });
  }
};

// Crear un nuevo género
export const createGeneroJDB = async (req, res) => {
  try {
    const { nombre } = req.body;

    const nuevoGenero = await prisma.genero.create({
      data: { nombre }
    });

    res.status(201).json(nuevoGenero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el género.' });
  }
};

// Actualizar completamente un género (PUT)
export const updateGeneroJDB = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const generoExistente = await prisma.genero.findUnique({
      where: { id: parseInt(id) }
    });

    if (!generoExistente) {
      return res.status(404).json({ message: 'Género no encontrado.' });
    }

    const generoActualizado = await prisma.genero.update({
      where: { id: parseInt(id) },
      data: { nombre }
    });

    res.json(generoActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el género.' });
  }
};

// Actualizar parcialmente un género (PATCH)
export const patchGeneroJDB = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const generoExistente = await prisma.genero.findUnique({
      where: { id: parseInt(id) }
    });

    if (!generoExistente) {
      return res.status(404).json({ message: 'Género no encontrado.' });
    }

    const generoActualizado = await prisma.genero.update({
      where: { id: parseInt(id) },
      data: {
        nombre: nombre !== undefined ? nombre : generoExistente.nombre,
      }
    });

    res.json(generoActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar parcialmente el género.' });
  }
};

// Eliminar un género
export const deleteGeneroJDB = async (req, res) => {
  try {
    const { id } = req.params;

    const generoExistente = await prisma.genero.findUnique({
      where: { id: parseInt(id) }
    });

    if (!generoExistente) {
      return res.status(404).json({ message: 'Género no encontrado.' });
    }

    await prisma.genero.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Género eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el género.' });
  }
};
