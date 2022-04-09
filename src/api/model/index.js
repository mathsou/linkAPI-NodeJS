const userModel = require("./userModel");
const jobModel = require("./jobModel");
const recurenceTypeModel = require("./recurenceTypeModel");

require("./associations/userAssociation");
require("./associations/jobAssociation");
require("./associations/recurenceTypeAssociation");

module.exports = {
  userModel,
  jobModel,
  recurenceTypeModel
};
