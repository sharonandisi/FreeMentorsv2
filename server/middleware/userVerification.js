import jwt from 'jsonwebtoken';
import { findByEmail, findOne } from '../models/userModel';
import authHelper from '../helpers/authHelper';
import '../../config';
import messageHelper from '../helpers/messageHelper';
import response from '../helpers/responseHelper';



    async function verifyUser(req, res, next) {
        const user = await findByEmail(req.body.email);
        if (user) return response(res, 400, messageHelper.users.auth.emailUnavailable)
        return next();
    }

    async function verifyRegistereduser(req, res, next) {
        const user = await findByEmail(req.body.email);
        if (!user) return response(res, 400, messageHelper.users.failed.signinFail)
        return next();
    }

    async function  verifyexistingUser(req, res, next) {
        const { userid } = req.decoded;
        const user = await userModel.findOne(userid);
        if (!user) return response(res, 400, messageHelper.users.auth.notUSer)
        return next();
    }

    async function verifyPassword(req, res, next) {
        const user = await findByEmail(req.body.email);
        if (!authHelper.comparePassword(user.password, req.body.password)) {
            return response(res, 401, messageHelper.users.auth.invalidPassword)
        }
        return next();
    }

    async function verifyauthenUser(req, res, next) {
        const token = req.header('x-auth-token');
        if (!token) {
            return response(res, 401, messageHelper.users.auth.tokenFailure)
        }
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) {
                return response(res, 401, messageHelper.users.auth.tokenFailure)
            }
            req.decoded = decoded;
        });
        return next();
    }

    async function verifyAdmin(req, res, next) {
        const { isadmin, id } = req.decoded;
        if (!isadmin) return response(res, 403, messageHelper.users.auth.access)
        if (id == req.params.id) return response(res, 400, messageHelper.users.auth.selfChangementor)
        return next();
    }

    async function checkmentorStatus(req, res, next) {
        const { mentorid } = req.body;
        const mentor = await findOne(mentorid);
        if (!mentor || !mentor.mentorstatus) {
            return response(res, 400, messageHelper.users.auth.mentorStatus)
        }
        return next();
    }

    async function verifyMentor(req, res, next) {
        const { id:mentorid } = req.decoded;
        const mentor = await findOne(mentorid);
        if (!mentor.mentorstatus) {
            return response(res, 403, messageHelper.users.auth.access)
        }
        return next()
    }

    async function checkIfMentor(req, res, next) {
        const mentorid = req.params.id;
        if (parseInt(mentorid) < 1 || parseInt(mentorid) > 1000 || typeof(mentorid) === 'number') return response(res, 400, messageHelper.users.failed.failed)
        const {mentorstatus} = await findOne(mentorid);
        if (mentorstatus) return response(res, 409, messageHelper.users.mentors.mentorChangeConflict)
        return next()
    }
module.exports = {
    verifyUser,
    verifyRegistereduser,
    verifyexistingUser,
    verifyPassword,
    verifyauthenUser,
    verifyAdmin,
    checkmentorStatus,
    verifyMentor,
    checkIfMentor
}