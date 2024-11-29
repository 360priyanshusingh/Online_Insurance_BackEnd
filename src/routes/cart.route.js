import express from 'express';
import * as CartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';

const router = express.Router();



router.post('/addPolicyIntoCart/:id',userAuth,verifyRole('Customer'), CartController.addPolicyIntoCart);

router.post('/removePolicyFromCart/:id',userAuth,verifyRole('Customer'), CartController.removePolicyFromCart);

router.get('/getCart',userAuth,verifyRole('Customer'), CartController.getCart);



export default router;
