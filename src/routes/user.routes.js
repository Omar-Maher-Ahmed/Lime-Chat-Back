import Router from 'express';
import * as userController from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const userRoutes = Router();
// Create a new user
userRoutes.post('/', authMiddleware, userController.createUser )
userRoutes.get('/:id', authMiddleware, userController.getUserById )
userRoutes.get('/', authMiddleware, userController.getUsers )
userRoutes.get('/', authMiddleware, userController.updateUser )
userRoutes.delete('/', authMiddleware, userController.deleteUser )

export default userRoutes;
