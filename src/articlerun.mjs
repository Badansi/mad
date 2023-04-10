import Article from './models/article.mjs';

const createArticles = async () => {
  // Création des articles
  const article1 = await Article.create({
    title: 'Space',
    content: 'Le mystère crée l emerveillement et l émerveillement est à la base du désir de compréhension de l homme',
    publication_date: '2021-03-31'
  });

  const article2 = await Article.create({
    title: 'Submission',
    content: 'L oeuvre d art ne s obtient que par contrainte et par la soumission du réalisme à l idée de beauté préconçue',
    publication_date: '2020-09-11'
  });

  console.log('Created article:', article1.title, article2.title);
};

createArticles();
