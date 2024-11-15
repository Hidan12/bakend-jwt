import joi from "joi-oid"
import { ERROR_BOOLEAN, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING, ERROR_EMPTY, ERROR_DATE, ERROR_FORMAT_STRING } from "../../utils/msg-Joi.js"

const schema = joi.object({
    date: joi.date().required().messages({
        'date.base': ERROR_DATE,
        'date.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
      }),
    description: joi.string().required().pattern(/^[a-zA-Z\s]+$/).messages({
        'string.base':ERROR_STRING,
        'string.pattern.base': ERROR_FORMAT_STRING,
        "string.empty":ERROR_EMPTY,
        'any.required':ERROR_REQUIRED,
    }),
    value: joi.number().required().messages({
        'number.base':ERROR_NUMBER,
        'any.required':ERROR_REQUIRED,
    }),
    active:joi.boolean().required().messages({
        'boolean.base': ERROR_BOOLEAN,
        'any.required': ERROR_REQUIRED
      }),
    user: joi.objectId().required().messages({
        'any.required': ERROR_REQUIRED
    })
})

export default schema