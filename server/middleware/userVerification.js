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

    async verifyRegistereduser(req, res, next) {
        const text = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await db.query(text, [req.body.email]);
        if (!rows[0]) {
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

    async verifyPassword(req, res, next) {
        const text = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await db.query(text, [req.body.email]);
        if (!authHelper.comparePassword(rows[0].password, req.body.password)) {
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

    async verifyAdmin(req, res, next) {
        const text = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await db.query(text, [req.body.email]);
        let admin = "";
        if (user.isAdmin) {
            rows[0].isAdmin = user
        }
        if (!admin) {
            return res.status(403).json({
                status: 403,
                error: 'Access denied',
            });
        }
        return next();
    }

}

export default new Verify();