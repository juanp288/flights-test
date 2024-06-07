import * as Joi from 'joi';
import { truthy, falsy } from 'src/common/constants/bools';

export default Joi.object({
  NODE_ENV: Joi.string().valid('dev', 'prod').required(),
  PORT: Joi.number().port().default(3000),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().port().default(3306),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.exist(),
  DB_DATABASE: Joi.string().required(),
  DB_SYNC: Joi.boolean()
    .truthy(...truthy)
    .falsy(...falsy)
    .when('NODE_ENV', {
      is: 'prod',
      then: Joi.boolean()
        .required()
        .truthy(...truthy)
        .falsy(...falsy)
        .default(false),
    }),
});
