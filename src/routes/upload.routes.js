import Router from 'express';
import upload from '../middleware/upload.middleware.js';
import * as uploadController from '../controllers/upload.controller.js';

const uploadRouter = Router();

uploadRouter.post('/', upload.single('file'), uploadController.uploadFile);
uploadRouter.get('/', uploadController.getFileById);
// uploadRouter.get('/:id', uploadController.getFiles);
uploadRouter.put('/:id', upload.single('file'), uploadController.updateFile);
uploadRouter.delete('/:id', uploadController.deleteFile);

export default uploadRouter;


