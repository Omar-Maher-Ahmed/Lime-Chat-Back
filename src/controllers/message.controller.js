import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
    const { room, content, type } = req.body;
    try {
        const message = await Message.create({
            sender: req.user.id,
            room,
            content,
            type,
        });
        res.status(201).json(message);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const sendAudioMessage = async (req, res) => {
    try {
        const sender = req.user.id;
        const { room } = req.body;
        const audioFile = req.file;

        if (!audioFile) {
            return res.status(400).json({ message: 'Audio file is required' });
        }

        const message = new Message({
            sender,
            room,
            audio: `/uploads/${audioFile.filename}`,
            type: 'audio'
        });

        await message.save();
        return res.status(201).json({ message: 'Audio message sent', data: message });

    } catch (error) {
        console.error('Audio upload error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};