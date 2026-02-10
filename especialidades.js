const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Especialidade = sequelize.define('Especialidade', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING
  }
}, { freezeTableName: true });

module.exports = Especialidade;
