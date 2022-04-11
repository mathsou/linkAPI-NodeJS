const userModel = require("../model/userModel");

module.exports = {
  async findUsers() {
    return await userModel.findAndCountAll();
  },
  async findOneUser(id) {
    return await userModel.findOne({
      where: {id}
    });
  },
  async findEmailExists(email) {
    return await userModel.findOne({
      where: {email}
    });
  },
  async registerUser(payload) {
    return await userModel.build(payload).save();
  },
  async updateUser(id, payload) {
    return await userModel.update(payload, {
      where: {id}
    });
  },
  async deleteUser(id) {
    return await userModel.destroy({
      where: { id },
    });
  }
};
