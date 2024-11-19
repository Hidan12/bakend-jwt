import joi from "joi-oid"
import { ERROR_EMPTY, ERROR_FORMAT_STRING, ERROR_NUMBER, ERROR_POSITIVE, ERROR_REQUIRED, ERROR_STRING } from "../../utils/msg-Joi.js"

const schema = joi.object({
    name: joi.string().required().pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s-]+$/).messages({
        'string.base':ERROR_STRING,
        'string.pattern.base': ERROR_FORMAT_STRING,
        "string.empty":ERROR_EMPTY,
        'any.required':ERROR_REQUIRED,
    }),
    type: joi.string().required().pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s-]+$/).messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'string.pattern.base': ERROR_FORMAT_STRING,
        'any.required':ERROR_REQUIRED,
    }),
    price: joi.number().positive().required().messages({
        'number.base':ERROR_NUMBER,
        'number.positive': ERROR_POSITIVE,
        'any.required':ERROR_REQUIRED,
    }),
    user: joi.objectId().required().messages({
        'any.required': ERROR_REQUIRED
    })
})

export default schema