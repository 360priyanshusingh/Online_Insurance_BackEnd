import express from 'express';
import * as SchemeController from '../controllers/scheme.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { verifyRole } from '../middlewares/verifyRole.middleware';

const router = express.Router();

router.post('/createScheme',userAuth,verifyRole('Employee'), SchemeController.newScheme);

router.get('/getSchemeById/:id', SchemeController.getSchemeById);

router.get('/getScheme', SchemeController.getScheme);



export default router;
