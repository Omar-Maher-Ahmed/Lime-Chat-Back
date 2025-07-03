import multer from "multer";

export const fileValidation = {
    image: ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'],
    file: ['application/pdf']
}

export function fileUpload(customValidation = []) {
    const storage = multer.diskStorage({});
    function fileFilter(req, file, cb) {
        if (customValidation.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'), false);
        }
    }
    const upload = multer({ fileFilter, storage })
    return upload;
}
