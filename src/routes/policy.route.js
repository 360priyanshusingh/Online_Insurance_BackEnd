import express from 'express';
import * as PolicyController from '../controllers/policy.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';

const router = express.Router();

router.post('/createPolicy', PolicyController.newPolicy);

router.get('/getPolicyById/:id', PolicyController.getPolicyById);

router.get('/getPolicy', PolicyController.getPolicy);



export default router;
