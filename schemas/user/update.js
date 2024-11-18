import joi from "joi-oid"
import { ERROR_BOOLEAN, ERROR_EMAIL, ERROR_MAX, ERROR_MIN, ERROR_NUMBER, ERROR_STRING, ERROR_EMPTY, ERROR_FORMAT_STRING, ERROR_POSITIVE, ERROR_REQUIRED } from "../../utils/msg-Joi.js"

const schema = joi.object({
    _id: joi.objectId().required().messages({
      'any.required': ERROR_REQUIRED
  }),
    name: joi.string().pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/).messages({
      'string.base':ERROR_STRING,
      "string.empty":ERROR_EMPTY,
      'string.pattern.base': ERROR_FORMAT_STRING
  }),
    //CONSULTAR
    mail: joi.string().email().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'string.email': ERROR_EMAIL
    }),
    typeUser: joi.number().min(1).max(3).messages({
        'number.base':ERROR_NUMBER,
        "number.min": ERROR_MIN(1),
        'number.max': ERROR_MAX(3)
        
    }),
    address: joi.string().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY
      }),
    phone: joi.number().integer().positive().min(1000000000).max(9999999999).messages({
        'number.base': ERROR_NUMBER,
        'number.positive': ERROR_POSITIVE,
        'number.min': ERROR_MIN(1000000000),
        'number.max': ERROR_MAX(9999999999)
      }),    
    password: joi.string().pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9]+$/).messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED,
      'string.pattern.base': ERROR_FORMAT_STRING
    }),
    online: joi.boolean().messages({
        'boolean.base': ERROR_BOOLEAN
      })
})

export default schema