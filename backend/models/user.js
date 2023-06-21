const { DataTypes } = require('sequelize');
const db = require('../config/db.config.js');


const User = db.sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = User;
