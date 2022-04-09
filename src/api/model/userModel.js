const database = require("../../database");
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const { INTEGER, STRING } = DataTypes;

const userModel = database.define(
  "user",
  {
    id: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(50),
      allowNull: false,
    },
    email: {
      type: STRING(80),
      allowNull: false,
    },
    password: {
      type: STRING(40),
      allowNull: false,
    },
    phone: {
      type: STRING(11),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    paranoid: true
  }
);

module.exports = userModel;
