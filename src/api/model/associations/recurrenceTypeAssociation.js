const recurrenceType = require("../recurrenceTypeModel");
const jobModel = require("../clientModel");


recurrenceType.hasMany(jobModel, {
  foreignKey: { name: "recurrenceTypeId", allowNull: false },
});
