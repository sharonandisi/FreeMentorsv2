import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import authHelper from '../helpers/authHelper';
import '../../config';

class Verify {
    /**
     * class constructor
     * @param { object } data
     */

    verifyUser(req, res, next) {
        const user = userModel.findByEmail(req.body.email.trim());
        if (user) {
            return res.status(400).json({
                status: 400,
                error: 'This email is already in use',
            });
        }
        return next();
    }

    verifyRegistereduser(req, res, next) {
        const user = userModel.findByEmail(req.body.email);
        if (!user) {
            return res.status(400).json({
                status: 400,
                error: 'Please sign up to access this service',
            });
        }
        return next();
    }

    verifyexistingUser(req, res, next) {
        const userid = req.decoded.payload;
        const user = userModel.findOne(userid);
        if (!user) {
            return res.status(404).json({
                status: 404,
                error: 'User does not exist',
            });
        }
        return next();
    }

    verifyPassword(req, res, next) {
        const user = userModel.findByEmail(req.body.email);
        if (!authHelper.comparePassword(user.password, req.body.password)) {
            return res.status(401).json({
                status: 401,
                error: 'Please enter a valid password',
            });
        }
        return next();
    }

    verifyauthenUser(req, res, next) {
        const token = req.header('x-auth-token');

        if (!token) {
            return res.status(401).json({
                status: 401,
                error: 'Failed to fetch token.Please try again',
            });
        }

        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    status: 401,
                    error: 'Failed to fetch token.Please try again',
                });
            }
            req.decoded = decoded;
        });
        return next();
    }





}

export default new Verify();