const jobModel = require("../model/jobModel");

module.exports = {
  async findJobs(limit, offset) {
    return await jobModel.findAndCountAll({
      limit,
      offset,
    });
  },
  async findOneJob(id) {
    return await jobModel.findOne({
      where: {id}
    });
  },
  async registerJob(payload) {
    return await jobModel.build(payload).save();
  },
  async updateJob(id, payload) {
    return await jobModel.update(payload, {
      where: {id}
    });
  },
  async deleteJob(id) {
    return await jobModel.destroy({
      where: { id },
    });
  }
};
