const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('backend_db', 'regularUser', 'regularUserPass123', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql'
});

module.exports = sequelize;