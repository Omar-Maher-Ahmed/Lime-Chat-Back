import callModel from "../models/call.model.js";

// export const createCall = async (callData) => {
//     try {
//         const call = await callModel.create(callData);
//         return call;
//     } catch (error) {
//         throw new Error(`Error creating call: ${error.message}`);
//     }
// }

export const startCall = async (callData) => {
    try {
        const call = await callModel.create({
            ...callData,
            startedAt: new Date(),
        });
        return call;
    } catch (error) {
        throw new Error(`Error starting call: ${error.message}`);
    }
}

export const endCall = async (callId, endedAt) => {
    try {
        const call = await callModel.findByIdAndUpdate(
            callId,
            { endedAt: endedAt || new Date() },
            { new: true }
        );
        if (!call) {
            throw new Error('Call not found');
        }
        return call;
    } catch (error) {
        throw new Error(`Error ending call: ${error.message}`);
    }
}

export const createCallHistory = async (callData) => {
    try {
        const call = await callModel.create(callData);
        return call;
    } catch (error) {
        throw new Error(`Error creating call log: ${error.message}`);
    }
}

export const getCallHistory = async (roomId) => {
    try {
        const calls = await callModel.find({ room: roomId })
            .populate('caller', 'name email')
            .sort({ startedAt: -1 });
        return calls;
    } catch (error) {
        throw new Error(`Error fetching call history: ${error.message}`);
    }
}

export const getCallById = async (callId) => {
    try {
        const userId = req.user._id;
        const call = await callModel.findById(callId, { caller: userId });
        if (!call) {
            throw new Error('Call not found');
        }
        return call;
    } catch (error) {
        throw new Error(`Error fetching call: ${error.message}`);
    }
}

export const listCalls = async (req, res) => {
    try {
        const userId = req.user._id;
        const calls = await callModel.find({
            $or: [{ caller: userId },{ receiver: userId }]})
            .populate('caller', 'name email')
            .populate('receiver', 'name email')
            .sort({ startedAt: -1 });
        res.status(200).json(calls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteCallHistory = async (callId) => {
    try {
        const call = await callModel.findByIdAndDelete(callId);
        if (!call) {
            throw new Error('Can not delete call, it does not exist');
        }
        return call;
    } catch (error) {
        throw new Error(`Error deleting call: ${error.message}`);
    }
}






