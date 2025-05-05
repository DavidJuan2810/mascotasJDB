import { PrismaClient } from '../../generated/prisma/client.js';  
const prisma = new PrismaClient;

export const getRazasJDB = async (req, res) => {
  try {
    const razas = await prisma.raza.findMany({
      include: { mascota: true },
    });
    res.status(200).json(razas);
  } catch (error) {
    console.error('Error al obtener razas:', error);
    res.status(500).json({ error: 'Error al obtener razas' });
  }
};

export const getRazaByIdJDB = async (req, res) => {
  const { id } = req.params;
  try {
    const raza = await prisma.raza.findUnique({
      where: { id: parseInt(id) },
      include: { mascota: true },
    });
    if (!raza) return res.status(404).json({ error: 'Raza no encontrada' });
    res.status(200).json(raza);
  } catch (error) {
    console.error('Error al obtener raza:', error);
    res.status(500).json({ error: 'Error al obtener raza' });
  }
};

export const createRazaJDB = async (req, res) => {
  const { nombre } = req.body;
  try {
    const nuevaRaza = await prisma.raza.create({ data: { nombre } });
    res.status(201).json(nuevaRaza);
  } catch (error) {
    console.error('Error al crear raza:', error);
    res.status(500).json({ error: 'Error al crear raza' });
  }
};

export const updateRazaJDB = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const razaActualizada = await prisma.raza.update({
      where: { id: parseInt(id) },
      data: { nombre },
    });
    res.status(200).json(razaActualizada);
  } catch (error) {
    console.error('Error al actualizar raza:', error);
    res.status(500).json({ error: 'Error al actualizar raza' });
  }
};

export const patchRazaJDB = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const razaActualizada = await prisma.raza.update({
      where: { id: parseInt(id) },
      data,
    });
    res.status(200).json(razaActualizada);
  } catch (error) {
    console.error('Error al hacer patch a raza:', error);
    res.status(500).json({ error: 'Error al hacer patch a raza' });
  }
};

export const deleteRazaJDB = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.raza.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar raza:', error);
    res.status(500).json({ error: 'Error al eliminar raza' });
  }
};
