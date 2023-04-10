import { Article } from "../models/index.mjs";

const articleController = {
  getAll: async (req, res, next) => {
    try {
      const query = {};

      if(req.query.include) {
        query.include = req.query.include.split(',');
      }

      const articles = await Article.findAll(query);

      res.json(articles);
    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const query = {};

      if(req.query.include) {
        query.include = req.query.include.split(',');
      }

      const article = await Article.findByPk(req.params.id, query);
      
      if(article) {
        res.json(article);
        return;
      } else {
        res.status(404);
        throw new Error("404 - Article not found");
      }
    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const articleData = req.body;

      const article = await Article.create(articleData);
      
      res.json(article);

    } catch(err) {
      console.error(err);
      next(err);
    }

  },
  update: async (req, res, next) => {
    try {
      const article = await Article.findByPk(req.params.id);
      
      if(article) {
        const articleData = req.body;

        await article.update(articleData);

        res.json(article);
        return;
      } else {
        res.status(404);
        throw new Error("404 - Article not found");
      }
    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const article = await Article.findByPk(req.params.id);
      
      if(article) {
        await article.destroy();
        res.json({
          delete: 'ok'
        });
        return;
      } else {
        res.status(404);
        throw new Error("404 - Article not found");
      }
    } catch(err) {
      console.error(err);
      next(err);
    }
  }

}

export default articleController;
