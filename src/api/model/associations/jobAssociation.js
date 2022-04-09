const userModel = require("../userModel");
const jobModel = require("../clientModel");


jobModel.belongsTo(userModel, {
  foreignKey: { name: "userId", allowNull: false },
});

jobModel.hasOne(userModel, {
  foreignKey: { name: "recurenceTypeId", allowNull: false },
});