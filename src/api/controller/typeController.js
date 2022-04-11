const typeService = require("../service/typeService");

module.exports = {
  async findAll(req, res) {
    const { query } = req;
    const types = await typeService.findTypes();
    res.status(200).json(types);
  },
};
