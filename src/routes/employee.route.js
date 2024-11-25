import express from 'express';
import * as EmployeeController from '../controllers/employee.controller';
// import { newEmployeeValidator } from '../validators/Employee.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/createEmployee', EmployeeController.newEmployee);

router.post('/employeeLogin', EmployeeController.EmployeeLogin);

router.get('/getEmployee',userAuth, EmployeeController.getEmployee);



export default router;
