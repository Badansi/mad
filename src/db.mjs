import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mad', 'mad', 'mad', {
  host: 'localhost',
  dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  define: {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
});
sequelize.sync({ alter: true }); // corrige les erreurs et mettre à jour

export default sequelize;
