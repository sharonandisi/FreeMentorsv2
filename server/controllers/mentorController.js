import { findOne } from '../models/userModel';
import response from '../helpers/responseHelper';
import messageHelper from '../helpers/messageHelper';

async function fetchSpecificMentor(req, res) {
    try {
        const { mentorid: id } = req.params;
        const user = await findOne(id);
        if (!user.mentorstatus) {
            return response(res, 404, messageHelper.users.mentors.noMentor)
        }
        if (user.mentorstatus) {
            const {
                id: mentorid, firstname, lastname, email, address, occupation, bio, expertise, mentorstatus, isAdmin
            } = user;
            return response(res, 200, messageHelper.users.mentors.mentor, { mentorid, firstname, lastname, email, address, occupation, bio, expertise, mentorstatus, isAdmin })
        }
    } catch (error) {
        return response(res, 500, messageHelper.users.failed.catchError)
    }
}
module.exports = {
    fetchSpecificMentor
}
