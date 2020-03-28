import Joi, {JoiObject} from 'joi';
import {NextFunction, Request, Response} from 'express';

/*
* Takes an object with joi schema objects and creates a an ExpressJs middleware that uses these schemas to validate params. query params and payload
**/
export function validateRequest(schemas: {body?: Joi.JoiObject, params?: Joi.JoiObject, query?: Joi.JoiObject}) {
  return (req: Request, res: Response, next: NextFunction) => {

    try {
      genericSchemaValidation(req, 'params', schemas.params);
      genericSchemaValidation(req, 'query', schemas.query);
      genericSchemaValidation(req, 'body', schemas.body);
    }
    catch (err) {
      res.status(400).send(err);
      return;
    }

    next();
  }
}

function genericSchemaValidation(req: Request, propertyName: string, schema?: JoiObject) {
  if (schema == null) {
    return;
  }

  const values: any = (req as any)[propertyName];
  const validationResult = Joi.validate(values, schema as JoiObject);

  if (validationResult.error) {
    throw validationResult.error;
  }
  else {
    (req as any)[propertyName] = validationResult.value;
  }
}
