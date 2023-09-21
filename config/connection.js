const { Sequelize } = require('sequelize');
const config = require('../config/config')
require('dotenv').config();

const sequelize = new Sequelize( config.development );

try {
  sequelize.authenticate();
  console.log('Sucesso na Conexão');
} catch (error) {
  console.error('Não foi possivel conectar no banco', error);
}

module.exports = { Sequelize, sequelize };