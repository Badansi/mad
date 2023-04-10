import express from 'express';
import router from express.Router();

import userRouter from './user.mjs';
import articleRouter from './article.mjs';
import homeRouter from './home.mjs';

import authRouter from './auth.mjs';

import { checkToken } from '../middlewares/jwt.mjs';

router.use('/home', homeRouter);
router.use('/user', userRouter);
router.use('/article', articleRouter);
router.use('/auth', authController);

export default router;
