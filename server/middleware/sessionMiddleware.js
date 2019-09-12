import {findOne, findmentorSession } from '../models/sessionModel';
import messageHelper from './../helpers/messageHelper';
import response from '../helpers/responseHelper';

class verifySession {
    /**
    * class constructor
    * @param { object } data
    */

    async checkIfMentor (req, res, next) {
        const { mentorstatus } = req.decoded;
        if(mentorstatus) return response(res, 400, messageHelper.users.mentors.mentorToMentoError)
        return next();
    }

    async checkifSessionExists(req, res, next) {
        const {body} = req;
        const mentorSessions = await findmentorSession(body.mentorid);
        const { email:menteeEmail } = req.decoded;
        mentorSessions.forEach((session) => {
            if (session.menteeemail === menteeEmail && session.sessionstatus === 'pending') 
                return response(res, 409, messageHelper.sessions.sessions.pendingSession)
        })
        return next();
    }

    async checkalreadyAccepted(req, res, next) {
        const { sessionid } = req.params;
        const session = await findOne(sessionid)
        if (session.sessionstatus === 'accepted') return response(res, 409, messageHelper.sessions.sessions.acceptConflict)
        return next()
    }

    async checkalreadyDeclined(req, res, next) {
        const { sessionid } = req.params;
        const session = await findOne(sessionid)
        if (session.sessionstatus === 'rejected') return response(res, 409, messageHelper.sessions.sessions.rejectConflict)
        return next()
    }
}
export default new verifySession();