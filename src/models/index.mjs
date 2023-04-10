import User from './user.mjs';
import Article from './article.mjs';

// Définition de la relation entre User et Article
User.hasMany(Article, { foreignKey: 'user_id' });
Article.belongsTo(User, { foreignKey: 'user_id' });

export { User, Article };
