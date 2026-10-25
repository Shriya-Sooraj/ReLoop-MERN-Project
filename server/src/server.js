import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import centreRoutes from './routes/centreRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '1mb' }));
app.get('/api/health', (req, res) => res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected', app: 'ReLoop API' }));
app.use((req, res, next) => {
  if (req.path.startsWith('/api/') && mongoose.connection.readyState !== 1 && req.path !== '/api/health') {
    return res.status(503).json({ message: 'Database is not connected. Configure MONGODB_URI in server/.env and restart the server.' });
  }
  next();
});
app.use('/api/centres', centreRoutes);
app.use('/api/bookings', bookingRoutes);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;
connectDB().then(() => app.listen(port, () => console.log(`ReLoop API running at http://localhost:${port}`))).catch(err => { console.error('Database connection failed:', err.message); app.listen(port, () => console.log(`API running without database at http://localhost:${port}`)); });
