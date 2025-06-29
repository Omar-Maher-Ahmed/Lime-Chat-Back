// import * as uploadRepo from '../repos/upload.repo.js';

// export const uploadFile = async (req, res) => {
//     try {
//         const file = req.file;
//         const uploadedFile = await uploadRepo.uploadFile(file);
//         res.status(201).json(uploadedFile);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }
// export const getFileById = async (req, res) => {
//     try {
//         const file = await uploadRepo.getFileById(req.params.id);
//         res.json(file);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }
// export const getFiles = async (req, res) => {
//     try {
//         const files = await uploadRepo.getFiles();
//         res.json(files);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }
// export const updateFile = async (req, res) => {
//     try {
//         const updatedFile = await uploadRepo.updateFile(req.params.id, req.body);
//         res.json(updatedFile);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }
// export const deleteFile = async (req, res) => {
//     try {
//         await uploadRepo.deleteFile(req.params.id);
//         res.json({ message: 'File deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }


import uploadModel from '../models/upload.model.js';
import cloudinary from '../../cloudinary.config.js';

// CREATE
export const uploadFile = async (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    const newFile = new uploadModel({
        originalName: req.file.originalname,
        url: req.file.path,
        publicId: req.file.filename,
        type: req.file.mimetype
    });
    await newFile.save();
    res.status(201).json({ message: 'File uploaded', file: newFile });
};

// READ ALL
export const getAllFiles = async (req, res) => {
    const files = await uploadModel.find().sort({ uploadedAt: -1 });
    res.status(200).json(files);
};

// READ ONE
export const getFileById = async (req, res) => {
    const file = await uploadModel.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });
    res.status(200).json(file);
};

// UPDATE (replace file)
export const updateFile = async (req, res) => {
    const oldFile = await uploadModel.findById(req.params.id);
    if (!oldFile) return res.status(404).json({ message: 'File not found' });
    // delete old from cloudinary
    await cloudinary.uploader.destroy(oldFile.publicId, {
        resource_type: oldFile.type.startsWith("image") ? "image" : "video"
    });
    // upload new file
    if (!req.file) return res.status(400).json({ message: 'No new file uploaded' });
    oldFile.originalName = req.file.originalname;
    oldFile.url = req.file.path;
    oldFile.publicId = req.file.filename;
    oldFile.type = req.file.mimetype;
    await oldFile.save();
    res.status(200).json({ message: 'File updated', file: oldFile });
};

// DELETE
export const deleteFile = async (req, res) => {
    const file = await uploadModel.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });
    await cloudinary.uploader.destroy(file.publicId, {
        resource_type: file.type.startsWith("image") ? "image" : "video"
    });
    await file.deleteOne();
    res.status(200).json({ message: 'File deleted' });
};



