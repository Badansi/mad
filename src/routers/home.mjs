import express from 'express';
import { getAll } from './controllers/articleController';

const router = express.Router();

router.get('/home', getAll);

export default router;
