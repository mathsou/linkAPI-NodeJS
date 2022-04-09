const database = require("../../database");
const sequelize =require("sequelize");
const { DataTypes } = sequelize;
const { INTEGER, STRING } = DataTypes;

const recurenceTypeModel = database.define(
  "recurenceType",
  {
    id: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(20),
      allowNull: false,
    }
  },
  {
    tableName: "recurencetype",
    paranoid: true
  }
);

module.exports = recurenceTypeModel;
