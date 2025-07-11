import userModel from '../models/user.model.js'

export const createUser = async (user) => {
    const newUser = new userModel(user);
    return await newUser.save();
}
export const getUserById = async (id) => {
    return await userModel.findById(id)
}
export const getUsers = async () => {
    return await userModel.find();
}
export const updateUser = async (id, user) => {
    return await userModel.findByIdAndUpdate(id, user, { new: true });
}
export const deleteUser = async (id) => {
    return await userModel.findByIdAndDelete(id);
}

export const getUserByEmail = async (email) => {
    return await userModel.findOne({ email });
}