import * as meetingModel from '../models/meeting.model.js';

export const createMeeting = async (meetingData) => {
    const meeting = new meetingModel(meetingData);
    return await meeting.save();
};
export const getMeetingById = async (meetingId) => {
    return await meetingModel.findById(meetingId);
};
export const getAllMeetings = async () => {
    return await meetingModel.find();
};
export const updateMeeting = async (meetingId, meetingData) => {
    return await meetingModel.findByIdAndUpdate(meetingId, meetingData, { new: true });
};

export const deleteMeetingById = async (meetingId) => {
    return await meetingModel.findByIdAndDelete(meetingId);
};




