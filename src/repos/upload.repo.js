import * as uploadModel from "../models/upload.model";

export const uploadFile = async (file) => {
    const newFile = new uploadModel(file);
    return await newFile.save();
}
export const getFileById = async (id) => {
    return await uploadModel.findById(id);
}
export const getFiles = async () => {
    return await uploadModel.find();
}
export const updateFile = async (id, file) => {
    return await uploadModel.findByIdAndUpdate(id, file);
}
export const deleteFile = async (id) => {
    return await uploadModel.findByIdAndDelete(id);
}



