import express from "express";
import { createSession, acceptRequest, declineRequest } from "../controllers/sessionController";
import { verifyauthenUser, verifyMentor, checkmentorStatus } from "../middleware/userVerification";
import verifySession from '../middleware/sessionMiddleware';
import sessionIdParamVerfication from './../middleware/paramsIntVerification'


const router = express.Router();

router.post('/', verifyauthenUser, verifySession.checkIfMentor ,verifySession.checkifSessionExists,checkmentorStatus, createSession);
router.patch('/:sessionid/reject', verifyauthenUser, sessionIdParamVerfication, verifyMentor, verifySession.checkalreadyDeclined, declineRequest);
router.patch('/:sessionid/accept', verifyauthenUser, sessionIdParamVerfication, verifyMentor, verifySession.checkalreadyAccepted, acceptRequest);

export default router;