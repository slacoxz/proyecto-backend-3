// src/server.js
import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

try {
  await mongoose.connect(MONGO_URL);
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} catch (error) {
  console.error('Error al conectar con la base de datos:', error);
}
