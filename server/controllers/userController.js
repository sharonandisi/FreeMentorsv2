import authHelper from '../helpers/authHelper';
import userModel from '../models/userModel';

class user {
    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} user object
     */

     static async create(req, res) {
         const {
             firstname, lastname, email, password, address, occupation, bio, expertise,} = req.body;

        try {
         const hashpassword = authHelper.hashPassword(req.body.password.trim());
         const rows = await userModel.create({
             firstname: firstname.trim(),
             lastname: lastname.trim(),
             email: email.trim(),
             password: hashpassword,
             address: address.trim(),
             occupation: occupation.trim(),
             bio: bio.trim(),
             expertise:expertise.trim(),
         });
         const token = authHelper.generateToken({id:rows[0].id});
         return res.status(201).json({
             status: 201,
             message: 'successful',
             data: ({
                 token,
                 firstname: rows[0].firstname,
                 lastname: rows[0].lastname,
                 email: rows[0].email,
                 address: rows[0].address,
                 occupation: rows[0].occupation,
                 bio: bio[0].bio,
                 expertise: rows[0].expertise,

             }),
         });
        } catch(error) {
            if(error.routine === '_bt_check_unique'){
                return res.status(409).json({
                    status: 409,
                    error: "Email already in use"
                })
            }
            return res.status(400).json({
                status: 400,
                error: "Bad request"

            })
        }

}
}

export default user;