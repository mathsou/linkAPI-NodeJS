const recurrenceType = require("../recurrenceTypeModel");
const jobModel = require("../clientModel");


recurrenceType.belongsTo(jobModel, {
  foreignKey: { name: "recurrenceTypeId", allowNull: false },
});
