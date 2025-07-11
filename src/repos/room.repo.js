import roomModel from "../models/room.model.js";

export const createRoom = async (roomData) => {
    try {

        const data = {
            ...roomData,
            participants: [...new Set(roomData.participants, roomData.createdBy.toString())],
            isGroup: roomData.participants.length > 1
        }

        const room = await roomModel.create(data);
        return room;
    } catch (error) {
        throw new Error(`Error creating room: ${error.message}`);
    }
};

export const getAllRooms = async (userId) => {
    try {
        const rooms = await roomModel.find({ participants: userId }).populate('participants', 'name email avatar isOnline').populate('createdBy', 'name email avatar isOnline');
        return rooms;
    } catch (error) {
        throw new Error(`Error fetching rooms: ${error.message}`);
    }
};

export const getRoomById = async (roomId) => {
    try {
        const room = await roomModel.findById(roomId)
            .populate('participants', 'name email avatar isOnline')
            .populate('createdBy', 'name email avatar isOnline')
            .populate({
                path: 'messages',
                populate: {
                    path: 'sender',
                    select: 'name email avatar isOnline'
                }
            });
        if (!room) {
            throw new Error('Room not found');
        }
        return room;
    } catch (error) {
        throw new Error(`Error fetching room: ${error.message}`);
    }
};

export const updateRoom = async (roomId, updateData) => {
    try {
        const room = await roomModel.findByIdAndUpdate(roomId, updateData, { new: true });
        if (!room) {
            throw new Error('Room not found');
        }
        return room;
    } catch (error) {
        throw new Error(`Error updating room: ${error.message}`);
    }
};

export const deleteRoom = async (roomId) => {
    try {
        const room = await roomModel.findByIdAndDelete(roomId);
        if (!room) {
            throw new Error('Room not found');
        }
        return room;
    } catch (error) {
        throw new Error(`Error deleting room: ${error.message}`);
    }
};
