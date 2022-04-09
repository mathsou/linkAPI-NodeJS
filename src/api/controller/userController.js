const userService = require("../service/userService");

module.exports = {
  async findAll(req, res) {
    const { query } = req;
    const users = await userService.findUsers();
    res.status(200).json(users);
  }
  
};
