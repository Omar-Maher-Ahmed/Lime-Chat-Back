import express from 'express';
import * as messageController from '../controllers/message.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { validationMiddleware } from '../middleware/validation.middleware.js';
import {  sendMessage, updateMessage } from '../validations/message.validation.js';

const messageRoutes = express.Router();

messageRoutes.post('/send', authMiddleware, validationMiddleware(sendMessage), messageController.sendMessage);
// messageRoutes.post('/send-audio', authMiddleware, messageController.sendAudioMessage);
messageRoutes.get('/:id', authMiddleware, messageController.getMessageById);
messageRoutes.get('/', authMiddleware, messageController.getAllMessages);
messageRoutes.put('/', authMiddleware, validationMiddleware(updateMessage),messageController.updateMessage);
messageRoutes.delete('/:id', authMiddleware, messageController.deleteMessage);

export default messageRoutes;