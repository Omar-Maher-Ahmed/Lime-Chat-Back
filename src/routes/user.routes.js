import Router from 'express';
import * as userController from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { fileUpload, fileValidation } from '../validations/multer.validation.js';
// import * as valid from '../validations/user.validation.js';


const userRoutes = Router();
userRoutes.get('/me', authMiddleware, userController.me)
// userRoutes.get('/:id', valid.userValidSchema, authMiddleware, userController.getUserById)
// userRoutes.get('/', authMiddleware, userController.getUsers)
// userRoutes.put('/', valid.userValidSchema, authMiddleware, userController.updateUser)
// userRoutes.delete('/', valid.userValidSchema, authMiddleware, userController.deleteUser)
userRoutes.get('/', authMiddleware, userController.getUsers)
userRoutes.patch('/profile/image',authMiddleware,fileUpload(fileValidation.image).single('image'), userController.updateProfileImage)
userRoutes.patch('/profile/cover/image',authMiddleware,fileUpload(fileValidation.image).array('image',5), userController.updateCoverImage)

export default userRoutes;
