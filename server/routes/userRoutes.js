import express from 'express';
import User from '../controllers/userController';
import Validations from '../middleware/userValidation';
import Verify from '../middleware/userVerification';
import Admin from '../middleware/admin'

const router = express.Router();

router.post('/signup',Validations.validateSignup, User.create);
router.post('/signin',Validations.validateLogin, Verify.verifyRegistereduser, Verify.verifyPassword, Admin.createAdmin,User.login);
router.patch('/:id', Verify.verifyauthenUser, Verify.verifyAdmin,User.changeMentor);
export default router;