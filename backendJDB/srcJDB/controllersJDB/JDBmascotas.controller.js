import { PrismaClient } from '../../generated/prisma/client.js';
const prisma = new PrismaClient;
import PDFDocument from 'pdfkit';

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

// Generar reporte de mascotas por estado

export const generateReporteJDB = async (req, res) => {
  const { estado } = req.params;
  const validEstados = ['disponible', 'adoptado'];

  if (!validEstados.includes(estado)) {
    return res.status(400).json({ error: 'Estado inválido. Use "disponible" o "adoptado"' });
  }

  try {
    const mascotas = await prisma.mascotas.findMany({
      where: { estado: estado },
      include: {
        usuario: true,
        raza: true,
        categoria: true,
        genero: true,
      },
    });

    console.log('Mascotas encontradas para el reporte:', mascotas);

    if (!mascotas || mascotas.length === 0) {
      return res.status(404).json({ error: `No se encontraron mascotas con estado "${estado}"` });
    }

    if (req.query.format === 'pdf') {
      const doc = new PDFDocument({ margin: 40, size: 'A4' });
      const filename = `reporte_mascotas_${estado}_${Date.now()}.pdf`;

      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

      doc.pipe(res);

      // Título
      doc.fontSize(26)
         .fillColor('#1E90FF')
         .text(`Reporte de Mascotas ${estado === 'disponible' ? 'Disponibles' : 'Adoptadas'}`, {
           align: 'center',
           underline: true,
         });
      doc.moveDown(2);

      // Tabla
      const tableTop = 100;
      const rowHeight = 25;
      const colWidths = [80, 80, 60, 80, 80, 80, 60, 60];
      const tableWidth = colWidths.reduce((sum, width) => sum + width, 0);
      const startX = (doc.page.width - tableWidth) / 2;

      // Encabezados
      doc.fontSize(12)
         .font('Helvetica-Bold')
         .fillColor('#104E8B')
         .rect(startX, tableTop, tableWidth, 30)
         .fill('#104E8B')
         .fillColor('#FFFFFF');
      let x = startX;
      const headers = ['Nombre', 'Estado', 'Género', 'Raza', 'Categoría', 'Usuario', 'Latitud', 'Longitud'];
      headers.forEach((header, i) => {
        doc.text(header, x + 5, tableTop + 8, { width: colWidths[i], align: 'left' });
        x += colWidths[i];
      });

      // Filas
      doc.font('Helvetica').fontSize(10).fillColor('#000000');
      mascotas.forEach((mascota, index) => {
        const y = tableTop + 30 + (index * rowHeight);
        x = startX;

        const genero = mascota.genero?.nombre || 'N/A';
        const rowData = [
          mascota.nombre || 'N/A',
          mascota.estado || 'N/A',
          genero,
          mascota.raza?.nombre || 'N/A',
          mascota.categoria?.nombre || 'N/A',
          mascota.usuario?.nombre || 'N/A',
          mascota.latitud?.toString() || 'N/A',
          mascota.longitud?.toString() || 'N/A',
        ];

        rowData.forEach((cell, i) => {
          const fillColor = index % 2 === 0 ? '#ADD8E6' : '#87CEEB';
          doc.rect(x, y, colWidths[i], rowHeight)
             .fillAndStroke(fillColor, '#104E8B')
             .fillColor('#000000')
             .text(cell, x + 5, y + 5, { width: colWidths[i] - 10, align: 'left' });
          x += colWidths[i];
        });
      });

      // Pie de página
      const currentDate = new Date().toLocaleString('es-CO', {
        timeZone: 'America/Bogota',
        dateStyle: 'medium',
        timeStyle: 'short',
      });
      doc.fontSize(8)
         .fillColor('#104E8B')
         .text(`Generado el: ${currentDate}`, 40, doc.page.height - 50, { align: 'left' })
         .text('Página 1', 0, doc.page.height - 50, { align: 'right', width: doc.page.width - 80 });

      doc.end();
    } else {
      res.status(200).json(mascotas);
    }
  } catch (error) {
    console.error('Error al generar reporte:', error);
    res.status(500).json({ error: 'Error al generar reporte', details: error.message });
  } finally {
    await prisma.$disconnect();
  }
};