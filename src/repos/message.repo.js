import messageModel from "../models/message.model.js";

export const createMessage = async (messageData) => {
    try {
        const message = await messageModel.create(messageData);
        return message;
    } catch (error) {
        throw new Error(`Error creating message: ${error.message}`);
    }
}
export const getMessageById = async (messageId) => {
    try {
        const message = await messageModel.findById(messageId);
        if (!message) {
            throw new Error('Message not found');
        }
        return message;
    }
    catch (error) {
        throw new Error(`Error fetching message: ${error.message}`);
    }
}
export const getAllMessages = async () => {
    try {
        const messages = await messageModel.find();
        return messages;
    } catch (error) {
        throw new Error(`Error fetching messages: ${error.message}`);
    }
}
export const updateMessage = async (messageId, updateData) => {
    try {
        const message = await messageModel.findByIdAndUpdate(messageId, updateData, { new: true });
        if (!message) {
            throw new Error('Message not found');
        }
        return message;
    }
    catch (error) {
        throw new Error(`Error updating message: ${error.message}`);
    }
}

export const deleteMessage = async (messageId) => {
    try {
        const message = await messageModel.findByIdAndDelete(messageId);
        if (!message) {
            throw new Error('Message not found');
        }
        return message;
    } catch (error) {
        throw new Error(`Error deleting message: ${error.message}`);
    }
}