import express from 'express';
import { sendAudioMessage, sendMessage } from '../controllers/message.controller.js';
import * as messageRepo from '../repos/message.repo.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { requireFields } from '../middleware/validateRequest.middleware.js';
import upload from '../middleware/upload.middleware.js';

const messageRoutes = express.Router();

messageRoutes.post('/send', authMiddleware, requireFields('room', 'content'), sendMessage);
messageRoutes.post('/send-audio', authMiddleware, upload.single('audio'), sendAudioMessage);

messageRoutes.post('/', authMiddleware, messageRepo.createMessage );
messageRoutes.get('/:id', authMiddleware, messageRepo.getMessageById );
messageRoutes.get('/', authMiddleware, messageRepo.getAllMessages );
messageRoutes.put('/', authMiddleware, messageRepo.updateMessage );
messageRoutes.delete('/', authMiddleware, messageRepo.deleteMessage );

export default messageRoutes;