import mongoose from 'mongoose';

const chatRoomSchema = new mongoose.Schema({
    name: { type: String },
    isGroup: { type: Boolean, default: false },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('ChatRoom', chatRoomSchema);