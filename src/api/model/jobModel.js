const database = require("../../database");
const sequelize =require("sequelize");
const { DataTypes } = sequelize;
const { INTEGER, STRING, BOOLEAN } = DataTypes;

const jobModel = database.define(
  "jobs",
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
    status: {
      type: BOOLEAN,
      allowNull: false,
    },
    userId: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    recurenceTypeId: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    recurenceValue: {
      type: STRING(80),
      allowNull: false,
    },
    recurencePeriod: {
      type: STRING(80),
      allowNull: false,
    }
  },
  {
    tableName: "jobs",
    paranoid: true,
  }
);

module.exports = jobModel;
