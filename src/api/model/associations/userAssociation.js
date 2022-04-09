const userModel = require("../userModel");
const jobModel = require("../clientModel");


userModel.hasMany(jobModel, {
  foreignKey: { name: "userId", allowNull: false },
});
