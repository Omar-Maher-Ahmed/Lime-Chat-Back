import Message from '../models/message.model.js';
import * as messageRepo from '../repos/message.repo.js';

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

export const getMessageById = async (req, res) => {
    try {
        const message = await messageRepo.getMessageById(req.params.id);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllMessages = async (req, res) => {
    try {
        const messages = await messageRepo.getAllMessages();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateMessage = async (req, res) => {
    try {
        const message = await messageRepo.updateMessage(req.params.id, req.body);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMessage = async (req, res) => {
    try {
        const message = await messageRepo.deleteMessage(req.params.id);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// export const sendAudioMessage = async (req, res) => {
//     try {
//         const sender = req.user.id;
//         const { room } = req.body;
//         const audioFile = req.file;

//         if (!audioFile) {
//             return res.status(400).json({ message: 'Audio file is required' });
//         }

//         const message = new Message({
//             sender,
//             room,
//             audio: `/uploads/${audioFile.filename}`,
//             type: 'audio'
//         });

//         await message.save();
//         return res.status(201).json({ message: 'Audio message sent', data: message });

//     } catch (error) {
//         console.error('Audio upload error:', error);
//         return res.status(500).json({ message: 'Server error' });
//     }
// };
