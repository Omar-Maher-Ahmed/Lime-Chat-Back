import Router from 'express';
import * as userRepo from '../repos/user.repo.js';
import authMiddleware from '../middleware/auth.middleware.js';

const userRoutes = Router();
// Create a new user
userRoutes.post('/', authMiddleware, userRepo.createUser )
userRoutes.get('/:id', authMiddleware, userRepo.getUserById )
userRoutes.get('/', authMiddleware, userRepo.getUsers )
userRoutes.get('/', authMiddleware, userRepo.updateUser )
userRoutes.delete('/', authMiddleware, userRepo.deleteUser )

export default userRoutes;
