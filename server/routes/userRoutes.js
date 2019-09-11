import express from 'express';
import { Create, login } from '../controllers/userController';
import Validations from '../middleware/userValidation';
import Verify from '../middleware/userVerification';
import { CreateAdmin } from '../middleware/admin'

const router = express.Router();

router.post('/signup', Validations.validateSignup, Create);
router.post('/signin', Validations.validateLogin, Verify.verifyRegistereduser, Verify.verifyPassword, CreateAdmin, login);
router.patch('/:id', Verify.verifyauthenUser, Verify.verifyAdmin, ChangeMentor);
export default router;