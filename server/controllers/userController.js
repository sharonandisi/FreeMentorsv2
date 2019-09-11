import authHelper from '../helpers/authHelper';
import { create, findByEmail, changeMentor, } from '../models/userModel';
import messageHelper from '../helpers/messageHelper';
import response from '../helpers/responseHelper';



async function Create(req, res) {
    const { body } = req;
    try {
        const hashpassword = authHelper.hashPassword(body.password);
        const rows = await create(body, hashpassword);
        console.log(rows)
        const token = authHelper.generateToken(rows);
        return response(res, 201, messageHelper.users.auth.userSignup, token)
    } catch (error) {
        if (error.routine === '_bt_check_unique') {
            return response(res, 400, messageHelper.users.auth.emailUnavailable)
        }
        return response(res, 500, messageHelper.users.failed.catchError)

    }
}

async function login(req, res) {
    const { email } = req.body;
    try {
        const rows = await findByEmail(email);
        const token = authHelper.generateToken(rows);
        return response(res, 200, messageHelper.users.auth.userSignin, token)
    } catch (error) {
        return response(res, 400, messageHelper.users.failed.failed)
    }
}

async function ChangeMentor(req, res) {
    try {
        const rows = await changeMentor(req.params.id);
        console.log(rows)
        const { mentorstatus } = rows;
        return response(res, 200, messageHelper.users.changeMentor, { mentorstatus })
    } catch (error) {
        return response(res, 500, messageHelper.users.failed.catchError)
    }
}
module.exports = {
    Create,
    login,
    ChangeMentor
}