import express from 'express';
import { createCallLog, endCall, getCallHistory, startCall } from '../controllers/call.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const callRoutes = express.Router();

callRoutes.post('/log', authMiddleware, createCallLog);
callRoutes.post('/start-call', authMiddleware, startCall);
callRoutes.post('/end-call', authMiddleware, endCall);
callRoutes.get('/calls/:roomId', authMiddleware, getCallHistory);

export default callRoutes;