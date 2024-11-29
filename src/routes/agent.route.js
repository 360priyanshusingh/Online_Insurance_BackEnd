import express from 'express';
import * as AgentController from '../controllers/agent.controller';
// import { newAgentValidator } from '../validators/Agent.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';

const router = express.Router();

router.post('/createAgent', AgentController.newAgent);

router.post('/agentLogin', AgentController.AgentLogin);

router.get('/getAgent',userAuth,verifyRole("Agent"),AgentController.getAgent);



export default router;
