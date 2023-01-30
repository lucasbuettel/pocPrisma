import joi from 'joi';

const birthSchema = joi.object({
  
  name: joi.string().required(),
  cpf: joi.string().required().min(11).max(11),
  birthMonth: joi.string().required(),
  age: joi.number().required()

});

export default birthSchema;