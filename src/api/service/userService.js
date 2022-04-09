const userRepository = require("../repository/userRepository");


module.exports = {
  async findUsers() {
    const rows  = await userRepository.findUsers();
    return { data: rows };
  }
};
