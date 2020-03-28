import Joi, {JoiObject} from 'joi';
import {NextFunction, Request, Response} from 'express';

/*
* Takes an object with joi schema objects and creates a an ExpressJs middleware that uses these schemas to validate params. query params and payload
**/
export function validateRequest(schemas: {body?: Joi.JoiObject, params?: Joi.JoiObject, query?: Joi.JoiObject}) {
  return (req: Request, res: Response, next: NextFunction) => {

    try {
      genericSchemaValidation(req, res, 'params', schemas.params);
      genericSchemaValidation(req, res, 'query', schemas.query);
      genericSchemaValidation(req, res, 'body', schemas.body);
    }
    catch (err) {
      res.status(400).send(err);
    }

    next();
  }
}

function genericSchemaValidation(req: Request, res: Response, propertyName: string, schema?: JoiObject) {
  const values: any = (req as any)[propertyName];
  const validationResult = Joi.validate(values, schema as JoiObject);

  if (validationResult.error) {
    throw validationResult.error;
  }
  else {
    (req as any)[propertyName] = validationResult.value;
  }
}
