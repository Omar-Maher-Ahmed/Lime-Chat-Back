import express from 'express';
import * as roomController from '../controllers/room.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { validationMiddleware } from '../middleware/validation.middleware.js';
import { createRoomSchema, deleteRoomSchema, updateRoomSchema } from '../validations/room.validation.js';

const roomRoutes = express.Router();
roomRoutes.post('/', authMiddleware, validationMiddleware(createRoomSchema), roomController.createRoom);
roomRoutes.get('/', authMiddleware, roomController.getAllRooms);
roomRoutes.get('/:id', authMiddleware, roomController.getRoomById);
roomRoutes.put('/:id', authMiddleware, validationMiddleware(updateRoomSchema), roomController.updateRoom);
roomRoutes.delete('/:id', authMiddleware, validationMiddleware(deleteRoomSchema), roomController.deleteRoom);

export default roomRoutes;
