import express from 'express';
import * as InsurancePlanController from '../controllers/insurancePlan.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/createInsurancePlan', InsurancePlanController.newInsurancePlan);

router.get('/getInsurancePlanById/:id', InsurancePlanController.getInsurancePlanById);

router.get('/getInsurancePlan', InsurancePlanController.getInsurancePlan);



export default router;
