const { object, string, number} = require('yup');


module.exports = {
  async registerJobValidator(req, res, next) {
    try {
      const jobSchema = object().shape({
        name: string("'name' deve ser uma string")
          .required("'name' é um campo obrigatório")
          .matches(
            "[A-zÀ-ÿ+\s]",
            "'name' deve conter somente caracteres válidos."
          ),
        status: number().oneOf([1, 0], "campo status só pode conter 0 ou 1")
          .required("status é um campo obrigatório"),
        userId: number("userId deve ser numérico")
          .required("userId é um campo obrigatório"),
        recurrenceTypeId: number("recurrenceTypeId deve ser numérico")
          .required("recurrenceTypeId é um campo obrigatório"),
        recurrenceValue: string("recurrenceValue deve ser string")
          .required("recurrenceValue é um campo obrigatório"),
        recurrencePeriod: string("recurrencePeriod deve ser string")
          .required("recurrencePeriod é um campo obrigatório"),
      });

      const { body } = req;
      await jobSchema.validate(body);

      next();
    } catch (error) {
        res.status(400).json({error: true, message: error.message});
    }
  },
  async updateJobValidator(req, res, next) {
    try {
      const jobParamSchema = object().shape({
        id: string().matches("[0-9]", "'id' deve ser um número."),
      });

      const jobBodySchema = object().shape({
        name: string("'name' deve ser uma string")
          .required("'name' é um campo obrigatório")
          .matches(
            "[A-zÀ-ÿ+\s]",
            "'name' deve conter somente caracteres válidos."
          ),
        status: number().oneOf([1, 0], "campo status só pode conter 0 ou 1")
          .required("status é um campo obrigatório"),
        recurrenceTypeId: number("recurrenceTypeId deve ser numérico")
          .required("recurrenceTypeId é um campo obrigatório"),
        recurrenceValue: string("recurrenceValue deve ser string")
          .required("recurrenceValue é um campo obrigatório"),
        recurrencePeriod: string("recurrencePeriod deve ser string")
          .required("recurrencePeriod é um campo obrigatório"),
      });

      const { body, params } = req;
      await jobBodySchema.validate(body);
      await jobParamSchema.validate(params);
      next();
    } catch (error) {
      res.status(400).json({error: true, message: error.message});
    }
  },
  async deleteJobValidator(req, res, next) {
    try {
      const jobParamSchema = object().shape({
        id: string().matches("[0-9]", "'id' deve ser um número."),
      });

      const { params } = req;
      await jobParamSchema.validate(params);
      next();
    } catch (error) {
      res.status(400).json({error: true, message: error.message});
    }
  },
};
