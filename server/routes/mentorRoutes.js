import express from 'express';
import { fetchSpecificMentor, fetchAllMentors } from '../controllers/mentorController';
import { verifyauthenUser} from '../middleware/userVerification';

const router = express.Router();

router.get('/:mentorid', verifyauthenUser, fetchSpecificMentor)
router.get('/', verifyauthenUser, fetchAllMentors);

export default router;