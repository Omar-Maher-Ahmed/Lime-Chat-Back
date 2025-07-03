import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import * as valid from '../validations/auth.validation.js';
import { validationMiddleware } from '../middleware/validation.middleware.js';

const authRoutes = Router();

authRoutes.post('/register', validationMiddleware(valid.register), register);
authRoutes.post('/login', validationMiddleware(valid.login), login);

export default authRoutes;
