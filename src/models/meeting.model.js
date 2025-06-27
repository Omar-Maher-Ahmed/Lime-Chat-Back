import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    meetingLink: { type: String },
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date },
}, { timestamps: true });

export default mongoose.model('Meeting', meetingSchema);