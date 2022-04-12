const { object, string } = require('yup');


module.exports = {
  async registerUserValidator(req, res, next) {
    try {
      const userSchema = object().shape({
        name: string("name deve ser uma string")
          .required("name é um campo obrigatório")
          .matches(
            "[A-zÀ-ÿ+\s]",
            "'name' deve conter somente caracteres válidos."
          ),
        email: string("email deve ser uma string")
          .email("digite um email válido")
          .required("email é um campo obrigatório"),
        password: string()
          .required("senha é um campo obrigatório"),
        phone: string("telefone deve ser uma string")
          .required("telefone é um campo obrigatório")
          .length(11, "telefone deve ter 11 caracteres")
          .matches("^[0-9]*$", "telefone só pode conter números")
      });

      const { body } = req;
      await userSchema.validate(body);

      next();
    } catch (error) {
        res.status(400).json({error: true, message: error.message});
    }
  },
  async updateUserValidator(req, res, next) {
    try {
      const userParamSchema = object().shape({
        id: string().matches("[0-9]", "'id' deve ser um número."),
      });

      const userBodySchema = object().shape({
        name: string("name deve ser uma string")
          .required("name é um campo obrigatório")
          .matches(
            "[A-zÀ-ÿ+\s]",
            "'name' deve conter somente caracteres válidos."
          ),
        email: string("email deve ser uma string")
          .required("email é um campo obrigatório"),
        password: string("senha deve ser uma string")
          .required("senha é um campo obrigatório"),
        phone: string("telefone deve ser uma string")
          .required("telefone é um campo obrigatório")
          .length(11, "telefone deve ter 11 caracteres")
          .matches("^[0-9]*$", "telefone só pode conter números")
      });

      const { body, params } = req;
      await userBodySchema.validate(body);
      await userParamSchema.validate(params);
      next();
    } catch (error) {
      res.status(400).json({error: true, message: error.message});
    }
  },
  async deleteUserValidator(req, res, next) {
    try {
      const userParamSchema = object().shape({
        id: string().matches("[0-9]", "'id' deve ser um número."),
      });

      const { params } = req;
      await userParamSchema.validate(params);
      next();
    } catch (error) {
      res.status(400).json({error: true, message: error.message});
    }
  },
};
