const database = require("../../database");
const sequelize =require("sequelize");
const { DataTypes } = sequelize;
const { INTEGER, STRING } = DataTypes;

const recurrenceTypeModel = database.define(
  "recurrenceType",
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
    tableName: "recurrencetype",
    paranoid: true
  }
);

module.exports = recurrenceTypeModel;
