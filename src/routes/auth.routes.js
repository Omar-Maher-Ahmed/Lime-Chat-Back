import express from 'express';
import {register, login} from '../controllers/auth.controller.js';
import * as valid from '../validations/auth.validation.js';
import { validationMiddelware } from '../middleware/validation.middleware.js';
const authRoutes = express.Router();

authRoutes.post('/register',validationMiddelwarevalid(valid.register) ,register);
authRoutes.post('/login',validationMiddelware(valid.login) ,login);

export default authRoutes;
