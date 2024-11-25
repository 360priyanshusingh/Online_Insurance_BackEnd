import express from 'express';
import * as AgentController from '../controllers/agent.controller';
// import { newAgentValidator } from '../validators/Agent.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/createAgent', AgentController.newAgent);

router.post('/agentLogin', AgentController.AgentLogin);

router.get('/getAgent',userAuth, AgentController.getAgent);



export default router;
