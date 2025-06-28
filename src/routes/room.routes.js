import express from 'express';
import createRoom from '../controllers/room.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { sendMessage } from '../controllers/message.controller.js';

const chatRoutes = express.Router();

chatRoutes.post('/create', authMiddleware, createRoom);
chatRoutes.post('/send', authMiddleware, sendMessage);

export default chatRoutes;