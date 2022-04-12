const jobModel = require("../model/jobModel");
const userModel = require("../model/userModel");
const recurrenceTypeModel = require("../model/recurrenceTypeModel");

module.exports = {
  async findJobs() {
    return await jobModel.findAll({
      attributes: [
        'id',
        'name',
        'status',
        'userId',
        'recurrenceTypeId',
        'recurrenceValue',
        'recurrencePeriod',
        'createdAt'
      ],
    });
  },
  async findOneJob(id) {
    return await jobModel.findOne({
      attributes: [
        'id',
        'name',
        'status',
        'userId',
        'recurrenceTypeId',
        'recurrenceValue',
        'recurrencePeriod',
        'createdAt'
      ],
      where: { id }
    });
  },
  async registerJob(payload) {
    return await jobModel.build(payload).save();
  },
  async updateJob(id, payload) {
    return await jobModel.update(payload, {
      where: { id }
    });
  },
  async deleteJob(id) {
    return await jobModel.destroy({
      where: { id },
    });
  }
};
