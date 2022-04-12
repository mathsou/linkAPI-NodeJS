const userService = require("../service/userService");

module.exports = {
  async findAll(req, res) {
    const users = await userService.findUsers();
    res.status(200).json(users);
  },
  async findOne(req, res) {
    const { query, params } = req;
    const users = await userService.findOneUser(params.id);
    res.status(200).json(users);
  },
  async create(req, res) {
    const { body } = req;
    const createdUser = await userService.registerNewUser(body);
    if (createdUser.error) {
      res.status(403).json(createdUser);
    } else {
      res.status(200).json({ id: createdUser, message: "Usuário cadastrado com sucesso" });
    }
  },
  async update(req, res) {
    const { params, body } = req;
    const rowsAffected = await userService.updateUser(params.id, body);
    if (rowsAffected)
      res.status(200).json({ message: "Usuário atualizado com sucesso" });
    else
      res.status(400).json({ error: true, message: "Usuário não encontrado" })
  },
  async delete(req, res) {
    const { params } = req;
    const rowsAffected = await userService.deleteUser(params.id);
    if (rowsAffected)
      res.status(200).json({ message: "Usuário excluído com sucesso" });
    else
      res.status(400).json({ error: true, message: "Usuário não encontrado" })
  }
};
