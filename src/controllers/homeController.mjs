import Article from '../models/article.mjs';
import { getAll } from './articleController';

export const homeController = async (req, res) => {
  try {
    const articles = await getAll(req, res);
    res.render('home', { articles });
  } catch (error) {
    console.log(error);
    res.status(500).send('Une erreur est survenue lors de la récupération des articles');
  }
};
