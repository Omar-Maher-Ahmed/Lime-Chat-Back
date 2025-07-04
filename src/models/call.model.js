import mongoose from 'mongoose';

const callSchema = new mongoose.Schema({
    caller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['audio', 'video'], required: true },
    receiver: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'room' },
}, { timestamps: true });

export default mongoose.model('Call', callSchema);
