import express from 'express';
import { fetchSpecificMentor } from '../controllers/mentorController';
import { verifyauthenUser} from '../middleware/userVerification';

const router = express.Router();

router.get('/:mentorid', verifyauthenUser, fetchSpecificMentor)

export default router;