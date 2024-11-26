import express from 'express';
import * as SchemeController from '../controllers/scheme.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/createScheme', SchemeController.newScheme);

router.get('/getSchemeById/:id', SchemeController.getSchemeById);

router.get('/getScheme', SchemeController.getScheme);



export default router;
