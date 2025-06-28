import Router from 'express';
import * as userController from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import * as valid from '../middleware/user.middleware.js';

const userRoutes = Router();
// Create a new user
userRoutes.post('/',valid.validateCreateUser , authMiddleware, userController.createUser )
userRoutes.get('/:id',valid.userExists, authMiddleware, userController.getUserById )
userRoutes.get('/', authMiddleware, userController.getUsers )
userRoutes.get('/',valid.validateUpdateUser, authMiddleware, userController.updateUser )
userRoutes.delete('/',valid.userExists, authMiddleware, userController.deleteUser )

export default userRoutes;
