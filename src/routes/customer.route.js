import express from 'express';
import * as CustomerController from '../controllers/customer.controller';
// import { newCustomerValidator } from '../validators/Customer.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';


const router = express.Router();

router.post('/createCustomer',userAuth,verifyRole('Agent'), CustomerController.newCustomer);

router.post('/CustomerLogin', CustomerController.CustomerLogin);

router.get('/getCustomer',userAuth, CustomerController.getCustomer);



export default router;
