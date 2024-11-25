import express from 'express';
import * as AdminController from '../controllers/admin.controller';
import { newAdminValidator } from '../validators/admin.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all Admins
router.get('/getAllAdmin', AdminController.getAllAdmins);

//route to create a new Admin
router.post('/createAdmin', AdminController.newAdmin);

router.post('/adminLogin', AdminController.adminLogin);

//route to get a single Admin by their Admin id
router.get('/getAdmin/:id', AdminController.getAdmin);

//route to update a single Admin by their Admin id
router.put('/updateAdmin/:id', AdminController.updateAdmin);

//route to delete a single Admin by their Admin
router.delete('/deleteAdmin/:id', AdminController.deleteAdmin);

export default router;
