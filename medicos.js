const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Medico = sequelize.define('Medico', {
  nome: DataTypes.STRING,
  crm: DataTypes.STRING
}, { freezeTableName: true });

module.exports = Medico;
