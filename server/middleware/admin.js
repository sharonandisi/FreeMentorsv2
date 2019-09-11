import { findByEmail, createAdmin } from '../models/userModel';
import authHelper from '../helpers/authHelper';
import '../../config';


async function CreateAdmin(req, res, next) {
    const rows = await findByEmail(process.env.ADMIN_EMAIL);
    const hashpassword = authHelper.hashPassword(process.env.ADMIN_PASSWORD);
    if (!rows) {
        createAdmin({
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

module.exports = {
    CreateAdmin
}