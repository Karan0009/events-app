import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

export default function createAccountSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // create schema object
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    startDateTime: Joi.string().required(),
    endDateTime: Joi.string().required(),
    address: Joi.string().required(),
    guests: Joi.string().required(),
    notification: Joi.string().required(),
    reminder: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    req.body = value;
    next();
  }
}
