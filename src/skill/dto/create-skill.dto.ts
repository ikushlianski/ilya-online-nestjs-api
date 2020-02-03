import * as Joi from '@hapi/joi';

export const schema = Joi.object({
  name: Joi.string(),
  description: Joi.string().min(3),
  lastUsed: Joi.number().min(0),
});
