import express from 'express';
import * as callController from '../controllers/call.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import {validationMiddleware} from '../middleware/validation.middleware.js';
import { createCallHistorySchema, deleteCallHistorySchema, endCallSchema, startCallSchema } from '../validations/call.validation.js';

const callRoutes = express.Router();
callRoutes.post('/start-call', authMiddleware, validationMiddleware(startCallSchema), callController.startCall);
callRoutes.put('/end-call', authMiddleware, validationMiddleware(endCallSchema), callController.endCall);
callRoutes.post('/history', authMiddleware, validationMiddleware(createCallHistorySchema), callController.createCallHistory);
callRoutes.get('/:roomId', authMiddleware, callController.getCallHistory);
callRoutes.get('/', authMiddleware, callController.getCallById);
callRoutes.get('/', authMiddleware, callController.listCalls);
callRoutes.delete('/:id', authMiddleware, validationMiddleware(deleteCallHistorySchema), callController.deleteCallHistory);


export default callRoutes;