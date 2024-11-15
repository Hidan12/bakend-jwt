import joi from "joi-oid"
import { ERROR_ALPHANUM, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_FORMAT_STRING, ERROR_NUMBER, ERROR_POSITIVE, ERROR_STRING } from "../../utils/msg-Joi.js"

const schema = joi.object({
    name: joi.string().pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/).messages({
        'string.base':ERROR_STRING,
        'string.pattern.base': ERROR_FORMAT_STRING,
        "string.empty":ERROR_EMPTY,
        'string.alphanum': ERROR_ALPHANUM
    }),
    type: joi.string().pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/).messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'string.pattern.base': ERROR_FORMAT_STRING
    }),
    price: joi.number().positive().messages({
        'number.base':ERROR_NUMBER,
        'number.positive': ERROR_POSITIVE
    }),
    user: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    })
})

export default schema