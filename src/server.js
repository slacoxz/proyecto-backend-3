// src/server.js
import app from './app.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 8080;

try {
  await mongoose.connect('URL DE MONGO');
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} catch (error) {
  console.error('Error al conectar con la base de datos:', error);
}
