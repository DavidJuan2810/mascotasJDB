import { PrismaClient } from '../../generated/prisma/client.js';  
const prisma = new PrismaClient;

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany({
      include: { mascotas: true },
    });
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// Obtener un usuario por ID
export const getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { id: parseInt(id) },
      include: { mascotas: true },
    });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

// Crear un nuevo usuario
export const createUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await prisma.usuarios.create({
      data: { nombre, email, password: hashedPassword },
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

// Actualizar todo un usuario
export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;
  try {
    // Si se proporciona una nueva contraseña, encriptarla
    const data = { nombre, email };
    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    const usuarioActualizado = await prisma.usuarios.update({
      where: { id: parseInt(id) },
      data,
    });
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

// Actualizar parcialmente un usuario
export const patchUsuario = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    // Si se actualiza la contraseña, encriptarla
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const usuarioActualizado = await prisma.usuarios.update({
      where: { id: parseInt(id) },
      data,
    });
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error('Error al hacer patch a usuario:', error);
    res.status(500).json({ error: 'Error al hacer patch a usuario' });
  }
};
// Eliminar un usuario
export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.usuarios.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};
