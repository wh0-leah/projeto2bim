const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Consulta = sequelize.define('Consulta', {
  data: DataTypes.DATE,
  observacoes: DataTypes.STRING
}, { freezeTableName: true });

module.exports = Consulta;
