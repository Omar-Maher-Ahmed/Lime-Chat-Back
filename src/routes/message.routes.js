import express from 'express';
import * as messageController from '../controllers/message.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { requireFields } from '../middleware/validateRequest.middleware.js';
import upload from '../middleware/upload.middleware.js';

const messageRoutes = express.Router();

messageRoutes.post('/send', authMiddleware, upload.single('file'), requireFields('room', 'content'), messageController.sendMessage);
messageRoutes.post('/send-audio', authMiddleware, upload.single('audio'), messageController.sendAudioMessage);
messageRoutes.post('/', authMiddleware, upload.single('file'), messageController.createMessage);
messageRoutes.get('/:id', authMiddleware, messageController.getMessageById);
messageRoutes.get('/', authMiddleware, messageController.getAllMessages);
messageRoutes.put('/', authMiddleware, upload.single('file'), messageController.updateMessage);
messageRoutes.delete('/', authMiddleware, messageController.deleteMessage);

export default messageRoutes;