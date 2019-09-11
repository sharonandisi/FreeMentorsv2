import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import authHelper from '../helpers/authHelper';
import db from "../db";
import '../../config';

class Verify {
    /**
     * class constructor
     * @param { object } data
     */

    async verifyUser(req, res, next) {
        const user = await findByEmail(req.body.email);
        if (user) return response(res, 400, messageHelper.users.auth.emailUnavailable)
        return next();
    }

    async verifyRegistereduser(req, res, next) {
        const user = await findByEmail(req.body.email);
        if (!user) return response(res, 400, messageHelper.users.failed.signinFail)
        return next();
    }

    async verifyexistingUser(req, res, next) {
        const { userid } = req.decoded;
        const user = await userModel.findOne(userid);
        if (!user) return response(res, 400, messageHelper.users.auth.notUSer)
        return next();
    }

    async verifyPassword(req, res, next) {
        const user = await findByEmail(req.body.email);
        if (!authHelper.comparePassword(user.password, req.body.password)) {
            return response(res, 401, messageHelper.users.auth.invalidPassword)
        }
        return next();
    }

    verifyauthenUser(req, res, next) {
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

    async verifyAdmin(req, res, next) {
        const { email } = req.decoded;
        const user = await findByEmail(email);
        if (!user.isadmin) return response(res, 403, messageHelper.users.auth.access)
        return next();
    }

    async checkmentorStatus(req, res, next) {
        const { mentorid } = req.body;
        const mentor = await userModel.findOne(mentorid);
        if (!mentor || mentor.mentorstatus !== 'true') {
            return response(res, 400, messageHelper.users.auth.mentorStatus)
        }
        return next();
    }

    async verifyMentor(req, res, next) {
        const { mentorid } = req.decoded.payload;
        const mentor = await userModel.findOne(mentorid);
        if (!mentor || User.mentorstatus !== 'true') {
            return response(res, 403, messageHelper.users.auth.access)
        }
        return next()
    }
}

export default new Verify();