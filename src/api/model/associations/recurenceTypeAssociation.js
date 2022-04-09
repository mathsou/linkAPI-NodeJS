const recurenceType = require("../recurenceTypeModel");
const jobModel = require("../clientModel");


recurenceType.belongsTo(jobModel, {
  foreignKey: { name: "recurenceTypeId", allowNull: false },
});
