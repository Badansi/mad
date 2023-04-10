
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import express from 'express';
import userRouter from './routers/user.mjs';
import articleRouter from './routers/article.mjs';
import errorHandler from './middlewares/errorHandler.mjs';

const app = express();
app.use(cors());

app.use(express.json());

app.use('/user', userRouter);
app.use('/article', articleRouter);
app.use(errorHandler);

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
