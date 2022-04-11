const userModel = require("../model/userModel");
const { Op } = require('sequelize');

module.exports = {
  async findUsers(name, start, end) {
    return await userModel.findAndCountAll({
      where: {
        name: {[Op.like]: name},
        createdAt: {[Op.between]: [start, end]}
      }
    });
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
