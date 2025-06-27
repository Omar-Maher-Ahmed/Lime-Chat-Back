import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /mp3|wav|mp4|mkv|webm/;
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, allowedTypes.test(ext));
};

const upload = multer({ storage, fileFilter });

export default upload;