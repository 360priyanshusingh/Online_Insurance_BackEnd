import express from 'express';
import * as CommissionController from '../controllers/commission.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';

const router = express.Router();

router.post('/createCommission', CommissionController.newCommission);

router.get('/getCommissionById/:id',userAuth,verifyRole('Agent'), CommissionController.getCommissionById);

router.get('/getCommissionByPaymentId/:id',userAuth,verifyRole('Agent'), CommissionController.getCommissionByPaymentId);

router.get('/getCommissionByPolicyId/:id',userAuth,verifyRole('Agent'), CommissionController.getCommissionByPolicyId);

router.get('/getCommission',userAuth,verifyRole('Agent'), CommissionController.getCommission);



export default router;
