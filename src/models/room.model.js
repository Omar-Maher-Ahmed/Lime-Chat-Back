import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    name: { type: String },
    isGroup: { type: Boolean, default: false },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

roomSchema.virtual('messages', {
    ref: 'Message',
    localField: '_id',
    foreignField: 'room',
    justOne: false,
});

export default mongoose.model('room', roomSchema);