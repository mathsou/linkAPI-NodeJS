const jobRepository = require("../repository/jobRepository");


module.exports = {
  async findJobs() {
    const { rows } = await jobRepository.findJobs();
    return { data: rows };
  },
  async findOneJob(id) {
    const rows = await jobRepository.findOneJob(id);
    return { data: rows };
  },
  async registerNewJob(fields) {
    const createdJob = await jobRepository.registerJob({
      name: fields.name,
      status: fields.status,
      userId: fields.userId,
      recurrenceTypeId: fields.recurrenceTypeId,
      recurrenceValue: fields.recurrenceValue,
      recurrencePeriod: fields.recurrencePeriod,
    });
    return createdJob.id;
  },
  async updateJob(id, fields) {
    const rowsAffected = await jobRepository.updateJob(id, {
      name: fields.name,
      status: fields.status,
      userId: fields.userId,
      recurrenceTypeId: fields.recurrenceTypeId,
      recurrenceValue: fields.recurrenceValue,
      recurrencePeriod: fields.recurrencePeriod,
    });
    return rowsAffected[0];
  },
  async deleteJob(id) {
    const rowsAffected = await jobRepository.deleteJob(id);
    return rowsAffected;
  }
};
