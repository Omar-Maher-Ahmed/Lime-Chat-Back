import callModel from "../models/call.model.js";

export const createCall = async (callData) => {
    try {
        const call = await callModel.create(callData);
        return call;
    } catch (error) {
        throw new Error(`Error creating call: ${error.message}`);
    }
}
export const getCallById = async (callId) => {
    try {
        const call = await callModel.findById(callId);
        if (!call) {
            throw new Error('Call not found');
        }
        return call;
    } catch (error) {
        throw new Error(`Error fetching call: ${error.message}`);
    }
}
export const updateCall = async (callId, updateData) => {
    try {
        const call = await callModel.findByIdAndUpdate(callId, updateData, { new: true });
        if (!call) {
            throw new Error('Call not found');
        }
        return call;
    } catch (error) {
        throw new Error(`Error updating call: ${error.message}`);
    }
}
export const deleteCall = async (callId) => {
    try {
        const call = await callModel.findByIdAndDelete(callId);
        if (!call) {
            throw new Error('Call not found');
        }
        return call;
    } catch (error) {
        throw new Error(`Error deleting call: ${error.message}`);
    }
}
export const listCalls = async (query = {}) => {
    try {
        const calls = await callModel.find(query).populate('caller', 'name email').sort({ startedAt: -1 });
        return calls;
    } catch (error) {
        throw new Error(`Error fetching calls: ${error.message}`);
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
export const createCallLog = async (callData) => {
    try {
        const call = await callModel.create(callData);
        return call;
    } catch (error) {
        throw new Error(`Error creating call log: ${error.message}`);
    }
}
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




