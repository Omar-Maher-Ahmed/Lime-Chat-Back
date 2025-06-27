import ChatRoom from '../models/chatRoom.model.js';

const createRoom = async (req, res) => {
    const { name, isGroup, participants } = req.body;
    try {
        const room = await ChatRoom.create({
            name,
            isGroup,
            participants,
            createdBy: req.user.id,
        });
        res.status(201).json(room);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export default createRoom;