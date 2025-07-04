import Router from 'express';
import * as userController from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
// import * as valid from '../validations/user.validation.js';


const userRoutes = Router();
userRoutes.get('/me', authMiddleware, userController.me)
userRoutes.get('/:id', authMiddleware, userController.getUserById)
userRoutes.get('/', authMiddleware, userController.getUsers)
userRoutes.put('/:id', authMiddleware, userController.updateUser)
userRoutes.delete('/', authMiddleware, userController.deleteUser)

export default userRoutes;
