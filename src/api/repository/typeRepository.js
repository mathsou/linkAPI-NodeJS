const typeModel = require("../model/recurrenceTypeModel");

module.exports = {
  async findTypes() {
    return await typeModel.findAll();
  }
};
