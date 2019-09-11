import express from 'express';
import { Create, login } from '../controllers/userController';
import Validations from '../middleware/userValidation';
import Verify from '../middleware/userVerification';

const router = express.Router();

router.post('/signup', Validations.validateSignup, Create);
router.post('/signin', Validations.validateLogin, Verify.verifyRegistereduser, Verify.verifyPassword, login);
export default router;