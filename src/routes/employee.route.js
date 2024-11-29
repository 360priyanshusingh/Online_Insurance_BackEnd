import express from 'express';
import * as EmployeeController from '../controllers/employee.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';

const router = express.Router();

router.post('/createEmployee', EmployeeController.newEmployee);

router.post('/employeeLogin', EmployeeController.EmployeeLogin);

router.get('/getEmployee',userAuth,verifyRole("Employee"), EmployeeController.getEmployee);



export default router;
