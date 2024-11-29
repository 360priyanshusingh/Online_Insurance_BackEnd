import express from 'express';
import * as PaymentController from '../controllers/payment.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';

const router = express.Router();

router.post('/createPayment',userAuth,verifyRole("Customer"),PaymentController.newPayment);

router.get('/getPaymentById/:id', PaymentController.getPaymentById);

router.get('/getPayment',userAuth,verifyRole("Customer"), PaymentController.getPayment);



export default router;
