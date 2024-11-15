import joi from "joi-oid"
import {ERROR_FORMAT_STRING,  ERROR_BOOLEAN, ERROR_EMAIL, ERROR_MAX, ERROR_MIN, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING, ERROR_EMPTY, ERROR_POSITIVE } from "../../utils/msg-Joi.js"

const schema = joi.object({
    name: joi.string().required().pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/).messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'any.required':ERROR_REQUIRED,
        'string.pattern.base': ERROR_FORMAT_STRING
    }),
    mail: joi.string().required().email().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'any.required':ERROR_REQUIRED,
        'string.email': ERROR_EMAIL
    }),
    typeUser: joi.number().required().min(1).max(3).messages({
        'number.base':ERROR_NUMBER,
        'any.required':ERROR_REQUIRED,
        "number.min": ERROR_MIN(1),
        'number.max': ERROR_MAX(3)
        
    }),
    address: joi.string().required().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
      }),
    phone: joi.number().integer().positive().min(1000000000).max(9999999999).required().messages({
        'number.base': ERROR_NUMBER,
        'number.positive': ERROR_POSITIVE,
        'number.min': ERROR_MIN(1000000000),
        'number.max': ERROR_MAX(9999999999),
        'any.required': ERROR_REQUIRED
      }),    
    password: joi.string().required().pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9]+$/).messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED,
        'string.pattern.base': ERROR_FORMAT_STRING
      }),
    online: joi.boolean().required().messages({
        'boolean.base': ERROR_BOOLEAN,
        'any.required': ERROR_REQUIRED
      })
})

export default schema