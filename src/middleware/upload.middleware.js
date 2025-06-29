import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../../cloudinary.config.js';

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        const resourceType = file.mimetype.startsWith('video')
            ? 'video'
            : file.mimetype.startsWith('audio')
                ? 'video'
                : 'image';
        return {
            folder: 'lime-chat-files', 
            public_id: Date.now() + '-' + file.originalname,
            resource_type: resourceType, 
            allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mp3', 'webm', 'wav', 'mkv'],
        };
    }
});

const upload = multer({ storage });

export default upload;