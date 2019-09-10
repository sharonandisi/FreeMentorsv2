import userModel from '../models/userModel';
import authHelper from '../helpers/authHelper';
import '../../config';
import db from "../db";

class Admin {

static async createAdmin(req, res, next) {
    const text = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await db.query(text, [req.body.email]);
    const hashpassword = authHelper.hashPassword(process.env.ADMIN_PASSWORD);
    if (!rows[0].isAdmin) {
        userModel.createAdmin({
            firstname: 'admin',
            lastname: 'admin',
            email: process.env.ADMIN_EMAIL,
            password: hashpassword,
            address: 'Nairobi',
            occupation: 'Admin',
            expertise: 'admin',
            bio: 'I am an admin',
            isAdmin: true,
        });
    }
    next();
};

}

export default Admin;