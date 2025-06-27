import express from 'express';
import { sendAudioMessage, sendMessage } from '../controllers/message.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { requireFields } from '../middleware/validateRequest.middleware.js';
import upload from '../middleware/upload.middleware.js';

const messageRoutes = express.Router();

messageRoutes.post('/send', authMiddleware, requireFields('room', 'content'), sendMessage);
messageRoutes.post('/send-audio', authMiddleware, upload.single('audio'), sendAudioMessage);

export default messageRoutes;