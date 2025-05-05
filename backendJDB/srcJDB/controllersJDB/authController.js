import { PrismaClient } from '../../generated/prisma/client.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || 'tu_clave_secreta'; // Usa una variable de entorno en producción

// Registrar un nuevo usuario
export const register = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    // Verificar si el usuario ya existe
    const usuarioExistente = await prisma.usuarios.findUnique({
      where: { email },
    });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const nuevoUsuario = await prisma.usuarios.create({
      data: {
        nombre,
        email,
        password: hashedPassword,
      },
    });

    // Generar un token JWT
    const token = jwt.sign({ id: nuevoUsuario.id, email: nuevoUsuario.email }, SECRET_KEY, {
      expiresIn: '1h', // El token expira en 1 hora
    });

    res.status(201).json({ usuario: nuevoUsuario, token });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

// Iniciar sesión
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Buscar el usuario por email
    const usuario = await prisma.usuarios.findUnique({
      where: { email },
    });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(200).json({ usuario, token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};