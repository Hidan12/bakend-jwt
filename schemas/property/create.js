import joi from "joi-oid"
import { ERROR_ALPHANUM, ERROR_EMPTY, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING } from "../../utils/msg-Joi.js"

const schema = joi.object({
    name: joi.string().required().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'any.required':ERROR_REQUIRED,
    }),
    type: joi.string().required().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'any.required':ERROR_REQUIRED,
    }),
    price: joi.number().required().messages({
        'number.base':ERROR_NUMBER,
        'any.required':ERROR_REQUIRED,
    }),
    user: joi.objectId().required().messages({
        'any.required': ERROR_REQUIRED
    })
})

export default schema