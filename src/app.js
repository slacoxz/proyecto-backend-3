// src/app.js
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { errorHandler } from './middlewares/errorHandler.js';
import mockRouter from './routes/mocks.router.js';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use("/mock", mockRouter);
app.use("/api/mocks", mockRouter);


export default app;
