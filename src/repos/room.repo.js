import roomModel from "../models/room.model.js";

export const createRoom = async (roomData) => {
    console.log({ roomData });

    try {
        const room = await roomModel.create(roomData);
        return room;
    } catch (error) {
        throw new Error(`Error creating room: ${error.message}`);
    }
};

export const getAllRooms = async () => {
    try {
        const rooms = await roomModel.find();
        return rooms;
    } catch (error) {
        throw new Error(`Error fetching rooms: ${error.message}`);
    }
};

export const getRoomById = async (roomId) => {
    try {
        const room = await roomModel.findById(roomId);
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

export const list = async (req, res) => {
    try {
        const rooms = await roomModel.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};