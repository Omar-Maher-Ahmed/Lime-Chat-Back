import express from 'express';
import * as roomController from '../controllers/room.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { sendMessage } from '../controllers/message.controller.js';

const chatRoutes = express.Router();

chatRoutes.post('/create', authMiddleware, roomController.createRoom);

export default chatRoutes;