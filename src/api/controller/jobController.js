const jobService = require("../service/jobService");

module.exports = {
  async findAll(req, res) {
    const { query } = req;
    const limit = Number(query.limit) || 1000;
    const offset = Number(query.offset) || 0;
    const jobs = await jobService.findJobs(limit, offset);
    res.status(200).json(jobs);
  },
  async findOne(req, res) {
    const { query, params } = req;
    const job = await jobService.findOneJob(params.id);
    res.status(200).json(job);
  },
  async create(req, res) {
    const { body } = req;
    const createdJob = await jobService.registerNewJob(body);
    if (createdJob.error) {
      res.status(403).json(createdJob);
    } else {
      res.status(200).json({ id: createdJob, message: "Job cadastrado com sucesso" });
    }
  },
  async update(req, res) {
    const { params, body } = req;
    const rowsAffected = await jobService.updateJob(params.id, body);
    if (rowsAffected)
      res.status(200).json({ message: "Job atualizado com sucesso" });
    else
      res.status(400).json({ error: true, message: "Job não encontrado" })
  },
  async delete(req, res) {
    const { params } = req;
    const rowsAffected = await jobService.deleteJob(params.id);
    if (rowsAffected)
      res.status(200).json({ message: "Job excluído com sucesso" });
    else
      res.status(400).json({ error: true, message: "Job não encontrado" })
  }
};
