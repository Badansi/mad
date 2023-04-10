import { DataTypes } from 'sequelize';
import sequelize from '../db.mjs';
import User from './user.mjs';

const Article = sequelize.define('article', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  publication_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

Article.belongsTo(User, { foreignKey: 'user_id' });

export default Article;
