import * as meetingRepo from '../repos/meeting.repo.js';
import Router from 'express';

const meetingRouter = Router();

meetingRouter.post('/', meetingRepo.createMeeting);
meetingRouter.get('/:id', meetingRepo.getMeetingById);
meetingRouter.get('/', meetingRepo.getAllMeetings);
meetingRouter.put('/:id', meetingRepo.updateMeeting);
meetingRouter.delete('/:id', meetingRepo.deleteMeetingById);

export default meetingRouter;


