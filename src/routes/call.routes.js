import express from 'express';
import * as callController from '../controllers/call.controller.js';
import * as callRepo from '../repos/call.repo.js';
import authMiddleware from '../middleware/auth.middleware.js';

const callRoutes = express.Router();

callRoutes.post('/log', authMiddleware, callController.createCallLog);
callRoutes.post('/start-call', authMiddleware, callController.startCall);
callRoutes.post('/end-call', authMiddleware, callController.endCall);
callRoutes.get('/calls/:roomId', authMiddleware, callController.getCallHistory);

callRoutes.get('/', authMiddleware, callRepo.createCall);
callRoutes.get('/', authMiddleware, callRepo.getCallById);
callRoutes.put('/:id', authMiddleware, callRepo.updateCall);
callRoutes.delete('/:id', authMiddleware, callRepo.deleteCall);
callRoutes.get('/', authMiddleware, callRepo.listCalls);


export default callRoutes;