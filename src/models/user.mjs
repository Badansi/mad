import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.mjs';

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registration_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user'
});

export default User;
