import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'JDB10';

export const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado, token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Agrega la información del usuario decodificado al objeto request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};