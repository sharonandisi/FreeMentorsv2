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
         const token = authHelper.generateToken(rows[0]);
         return res.status(201).json({
             status: 201,
             message: 'successful',
             data: ({
                 token
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
    static async login(req,res) {
    try{
        const { rows } = await userModel.login([req.body.email]);
        if (!rows[0]) {
            return res.status(400).json({
                status: 400,
                error: 'Email is a required field and must be valid'
            });
        }
        if (!authHelper.comparePassword(rows[0].password, req.body.password)) {
            return res.status(400).json({
                status: 400,
                error: 'The credentials you provided are incorrect'
            });
        }

        const token = authHelper.generateToken({id:rows[0].id, email:rows[0].email});
        return res.status(201).json({
            status: 201,
            message: 'Successfully logged in',
            data: ({
                token
            })
        });
    }catch(error) {
        return res.status(500).json({
            status: 500,
            error: 'Internal server error'
        })
    }
}
}

export default user;