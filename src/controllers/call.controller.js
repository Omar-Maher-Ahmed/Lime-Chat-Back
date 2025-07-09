import Call from '../models/call.model.js';

export const startCall = async (req, res) => {
    try {
    const { caller, receiver, roomId, type, startedAt } = req.body;
        const call = await Call.create({
            roomId,
            caller: req.user.id,
            receiver,
            startedAt,
            type,
        });

        res.status(201).json({
            message: 'Call started',
            call,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const endCall = async (req, res) => {
    try {
        const { callId, endedAt } = req.body;

        const call = await Call.findByIdAndUpdate(
            callId,
            { endedAt: endedAt || new Date() },
            { new: true }
        );

        if (!call) return res.status(404).json({ message: 'Call not found' });

        res.status(200).json({
            message: 'Call ended',
            call,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createCallHistory = async (req, res) => {
    try {
        const { receivers, callType, roomId } = req.body;

        const call = await Call.create({
            caller: req.user.id,
            receivers,
            callType,
            roomId,
        });

        res.status(201).json(call);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getCallHistory = async (req, res) => {
    try {
        const { roomId } = req.params;

        const calls = await Call.findOne({ room: roomId })
            .populate('caller', 'name email')
            .sort({ startedAt: -1 });

        res.status(200).json(calls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getCallById = async (req,res)=>{
    try {
        const {callId} = req.params;
        const call = await Call.findById(callId);
        if (!call){
            return res.status(404).json({ message: 'Call not found' });
        }
        res.status(200).json(call);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const listCalls = async (req, res) => {
    try {
        const calls = await Call.find({})
        res.status(200).json(calls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteCallHistory = async (req, res) => {
    try {
        const { callId } = req.params;
        const call = await Call.findByIdAndDelete(callId);
        if (!call) return res.status(404).json({ message: 'Call not found' });
        res.status(200).json({ message: 'Call deleted' });  
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

