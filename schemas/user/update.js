import joi from "joi-oid"
import { ERROR_ALPHANUM, ERROR_BOOLEAN, ERROR_EMAIL, ERROR_MAX, ERROR_MIN, ERROR_NUMBER, ERROR_STRING, ERROR_EMPTY } from "../../utils/msg-Joi.js"

const schema = joi.object({
    name: joi.string().alphanum().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'string.alphanum': ERROR_ALPHANUM
    }),
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
    phone: joi.number().integer().min(1000000000).max(9999999999).messages({
        'number.base': ERROR_NUMBER,
        'number.min': ERROR_MIN(1000000000),
        'number.max': ERROR_MAX(9999999999)
      }),    
    password: joi.string().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY
      }),
    online: joi.boolean().messages({
        'boolean.base': ERROR_BOOLEAN
      })
})

export default schema