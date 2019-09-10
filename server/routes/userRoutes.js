import express from 'express';
import User from '../controllers/userController';
import Validations from '../middleware/userValidation';
import Verify from '../middleware/userVerification';

const router = express.Router();

router.post('/signup',Validations.validateSignup, User.create);
router.post('/signin', Validations.validateLogin, Verify.verifyRegistereduser, Verify.verifyPassword, User.login);
export default router;