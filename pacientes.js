const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Paciente = sequelize.define('Paciente', {
  nome: DataTypes.STRING,
  cpf: DataTypes.STRING
}, { freezeTableName: true });

module.exports = Paciente;
