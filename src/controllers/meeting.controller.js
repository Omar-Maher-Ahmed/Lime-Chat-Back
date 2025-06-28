import * as meetingRepo from '../repos/meeting.repo.js';

export const createMeeting = async (req, res) => {
    try {
        const meetingData = req.body;
        const meeting = await meetingRepo.createMeeting(meetingData);
        res.status(201).json(meeting);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create meeting' });
    }
};

export const getMeetingById = async (req, res) => {
    try {
        const meetingId = req.params.id;
        const meeting = await meetingRepo.getMeetingById(meetingId);
        res.json(meeting);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get meeting' });
    }
};
export const getAllMeetings = async (req, res) => {
    try {
        const meetings = await meetingRepo.getAllMeetings();
        res.json(meetings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get meetings' });
    }
};
export const updateMeeting = async (req, res) => {
    try {
        const meetingId = req.params.id;
        const meetingData = req.body;
        const updatedMeeting = await meetingRepo.updateMeeting(meetingId, meetingData);
        res.json(updatedMeeting);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update meeting' });
    }
};
export const deleteMeetingById = async (req, res) => {
    try {
        const meetingId = req.params.id;
        await meetingRepo.deleteMeetingById(meetingId);
        res.json({ message: 'Meeting deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete meeting' });
    }
};


