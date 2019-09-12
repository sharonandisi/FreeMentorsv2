import express from 'express';
import { fetchSpecificMentor, fetchAllMentors } from '../controllers/mentorController';
import { verifyauthenUser} from '../middleware/userVerification';
import mentorParamVerfication from '../middleware/paramsIntVerification'
const router = express.Router();

router.get('/:mentorid', verifyauthenUser, mentorParamVerfication,fetchSpecificMentor)
router.get('/', verifyauthenUser, fetchAllMentors);

export default router;