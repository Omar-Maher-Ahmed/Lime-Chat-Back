import * as roomRepo from '../repos/room.repo.js';

export const createRoom = async (req, res) => {
    try {
        req.body.createdBy = req.user._id;
        
        const room = await roomRepo.createRoom(req.body);
        if (!room) {
            return res.status(400).json({ message: 'Failed to create room' });
        }
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllRooms = async (req, res) => {
    try {
        const userId = req.user._id;
        const rooms = await roomRepo.getAllRooms(userId);
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRoomById = async (req, res) => {
    try {
        const room = await roomRepo.getRoomById(req.params.id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateRoom = async (req, res) => {
    try {
        const room = await roomRepo.updateRoom(req.params.id, req.body);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteRoom = async (req, res) => {
    try {
        const room = await roomRepo.deleteRoom(req.params.id);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const list = async (req, res) => {
    try {
        const rooms = await roomRepo.getAllRooms();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
