import Router from 'express';
import * as userController from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
// import * as valid from '../middleware/user.middleware.js';
import * as valid from '../validations/user.validation.js';


const userRoutes = Router();
// Create a new user
userRoutes.get('/me', authMiddleware, userController.me)
userRoutes.get('/:id', valid.userValidSchema, authMiddleware, userController.getUserById)
userRoutes.get('/', authMiddleware, userController.getUsers)
userRoutes.put('/', valid.userValidSchema, authMiddleware, userController.updateUser)
userRoutes.delete('/', valid.userValidSchema, authMiddleware, userController.deleteUser)

export default userRoutes;
