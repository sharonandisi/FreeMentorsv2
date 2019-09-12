import express from 'express';
import user from './userRoutes';
import mentor from './mentorRoutes';

const router = express.Router();

router.use('/api/v2/auth', user);
router.use('/api/v2/mentors', mentor);


export default router;