const userModel = require("../userModel");
const recurrenceTypeModel = require("../recurrenceTypeModel");
const jobModel = require("../clientModel");


jobModel.belongsTo(userModel, {
  foreignKey: { name: "userId", allowNull: false },
});

jobModel.hasOne(recurrenceTypeModel, {
  foreignKey: { name: "recurenceTypeId", allowNull: false },
});