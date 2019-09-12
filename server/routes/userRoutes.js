import express from 'express';
import { Create, login, ChangeMentor } from '../controllers/userController';
import Validations from '../middleware/userValidation';
import { verifyRegistereduser, verifyPassword, verifyauthenUser, verifyAdmin} from '../middleware/userVerification';
import { CreateAdmin } from '../middleware/admin'

const router = express.Router();

router.post('/signup', Validations.validateSignup, Create);
router.post('/signin', Validations.validateLogin, verifyRegistereduser,verifyPassword, CreateAdmin, login);
router.patch('/:id', verifyauthenUser, verifyAdmin, ChangeMentor);
export default router;