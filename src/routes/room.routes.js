import express from 'express';
import * as roomController from '../controllers/room.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { validationMiddleware } from '../middleware/validation.middleware.js';
import { createRoomSchema, deleteRoomSchema, updateRoomSchema } from '../validations/room.validation.js';

const roomRoutes = express.Router();
roomRoutes.post('/create', authMiddleware, validationMiddleware(createRoomSchema), roomController.createRoom);
roomRoutes.get('/rooms/:id', authMiddleware, roomController.getRoomById);
roomRoutes.put('/rooms/:id', authMiddleware, validationMiddleware(updateRoomSchema), roomController.updateRoom);
roomRoutes.delete('/rooms/:id', authMiddleware, validationMiddleware(deleteRoomSchema), roomController.deleteRoom);

export default roomRoutes;
