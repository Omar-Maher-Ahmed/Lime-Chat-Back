import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // (لو direct)
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    content: { type: String },
    audio: { type: String },
    type: { type: String, enum: ['text', 'audio'], default: 'text' },
    createdAt: { type: Date, default: Date.now }
}); { timestamps: true };

export default mongoose.model('Message', messageSchema);