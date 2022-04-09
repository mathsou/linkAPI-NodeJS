const userModel = require("../model/userModel");

module.exports = {
  async findUsers() {
    return await userModel.findAll();
  }
};
