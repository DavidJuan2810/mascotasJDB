import { PrismaClient } from '../../generated/prisma/client.js';  
const prisma = new PrismaClient;

// Obtener todas las categorías
export const getCategorias = async (req, res) => {
  try {
    const categorias = await prisma.categorias.findMany();
    res.json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las categorías.' });
  }
};

// Obtener una categoría por ID
export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await prisma.categorias.findUnique({
      where: { id: parseInt(id) }
    });

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada.' });
    }

    res.json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la categoría.' });
  }
};

// Crear una nueva categoría
export const createCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    const nuevaCategoria = await prisma.categorias.create({
      data: { nombre }
    });

    res.status(201).json(nuevaCategoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la categoría.' });
  }
};

// Actualizar completamente una categoría (PUT)
export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const categoriaExistente = await prisma.categorias.findUnique({
      where: { id: parseInt(id) }
    });

    if (!categoriaExistente) {
      return res.status(404).json({ message: 'Categoría no encontrada.' });
    }

    const categoriaActualizada = await prisma.categorias.update({
      where: { id: parseInt(id) },
      data: { nombre }
    });

    res.json(categoriaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la categoría.' });
  }
};

// Actualizar parcialmente una categoría (PATCH)
export const patchCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const categoriaExistente = await prisma.categorias.findUnique({
      where: { id: parseInt(id) }
    });

    if (!categoriaExistente) {
      return res.status(404).json({ message: 'Categoría no encontrada.' });
    }

    const categoriaActualizada = await prisma.categorias.update({
      where: { id: parseInt(id) },
      data: {
        nombre: nombre !== undefined ? nombre : categoriaExistente.nombre,
      }
    });

    res.json(categoriaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar parcialmente la categoría.' });
  }
};

// Eliminar una categoría
export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    const categoriaExistente = await prisma.categorias.findUnique({
      where: { id: parseInt(id) }
    });

    if (!categoriaExistente) {
      return res.status(404).json({ message: 'Categoría no encontrada.' });
    }

    await prisma.categorias.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Categoría eliminada correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la categoría.' });
  }
};
