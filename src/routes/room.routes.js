import express from 'express';
import * as roomController from '../controllers/room.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
// import { sendMessage } from '../controllers/message.controller.js';

const chatRoutes = express.Router();

chatRoutes.post('/create', authMiddleware, roomController.createRoom);
chatRoutes.get('/rooms/:id', authMiddleware, roomController.getRoomById);
chatRoutes.put('/rooms/:id', authMiddleware, roomController.updateRoom);
chatRoutes.delete('/rooms/:id', authMiddleware, roomController.deleteRoom);
// chatRoutes.post('/rooms/:id/messages', authMiddleware, sendMessage);

export default chatRoutes;