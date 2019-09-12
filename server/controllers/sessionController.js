import { sessionCreate, accept, decline } from '../models/sessionModel';
import responseHelper from '../helpers/responseHelper';
import messageHelper from '../helpers/messageHelper';
import { findOne } from '../models/userModel';


async function createSession(req, res) {
    const { id: menteeid } = req.decoded;
    const { body } = req;
    console.log(body)
    try{
    const mentee = await findOne(menteeid);
    console.log(mentee)
    const menteeEmail = mentee.email;
    const session = await sessionCreate(body, menteeEmail);
    console.log(session);
    return responseHelper(res, 201, messageHelper.sessions.sessions.session,  session )
    }catch{
        return responseHelper(res, 500, messageHelper.users.failed.catchError)
 }
}

async function acceptRequest(req, res) {
    const {sessionid} = req.params;
    const session = await accept(sessionid);
    return responseHelper(res, 200, messageHelper.sessions.sessions.accept, session)
}

async function declineRequest(req, res) {
    const { sessionid } = req.params;
    const session = await decline(sessionid);
    return responseHelper(res, 200, messageHelper.sessions.sessions.decline, session)
}


module.exports = {
    createSession,
    acceptRequest,
    declineRequest
}