const md5 = require("md5");
const userRepository = require("../repository/userRepository");


module.exports = {
  async findUsers(name, start, end) {
    name = name ? "%"+name.replace(" ", "%")+"%" : "%%";
    start = start ? new Date(start) : new Date("1970-01-01 00:00:00");
    end = end ? new Date(end) : new Date("2100-01-01 00:00:00");
    console.log(name)
    const { rows } = await userRepository.findUsers(name, start, end);
    return { data: rows };
  },
  async findOneUser(id) {
    const rows = await userRepository.findOneUser(id);
    return { data: rows };
  },
  async registerNewUser(fields) {
    if (await userRepository.findEmailExists(fields.email))
      return { error: true, message: "E-mail já cadastrado" };
    const createdUser = await userRepository.registerUser({
      name: fields.name,
      email: fields.email,
      password: md5(fields.password),
      phone: fields.phone
    });
    return createdUser.id;
  },
  async updateUser(id, fields) {
    let payload = {
      name: fields.name,
      email: fields.email,
      phone: fields.phone
    };
    if (fields.password)
      payload.password = md5(fields.password);
    const rowsAffected = await userRepository.updateUser(id, payload);
    return rowsAffected[0];
  },
  async deleteUser(id) {
    const rowsAffected = await userRepository.deleteUser(id);
    return rowsAffected;
  }
};
