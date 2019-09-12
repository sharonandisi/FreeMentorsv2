import jwt from 'jsonwebtoken';
import { findByEmail } from '../models/userModel';
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
        const { email } = req.decoded;
        const user = await findByEmail(email);
        if (!user.isadmin) return response(res, 403, messageHelper.users.auth.access)
        return next();
    }

    async function checkmentorStatus(req, res, next) {
        const { mentorid } = req.body;
        const mentor = await userModel.findOne(mentorid);
        if (!mentor || mentor.mentorstatus !== 'true') {
            return response(res, 400, messageHelper.users.auth.mentorStatus)
        }
        return next();
    }

    async function verifyMentor(req, res, next) {
        const { mentorid } = req.decoded.payload;
        const mentor = await userModel.findOne(mentorid);
        if (!mentor || User.mentorstatus !== 'true') {
            return response(res, 403, messageHelper.users.auth.access)
        }
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
    verifyMentor
}