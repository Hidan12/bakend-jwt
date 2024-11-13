import joi from "joi-oid"
import { ERROR_ALPHANUM, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_NUMBER, ERROR_STRING } from "../../utils/msg-Joi.js"

const schema = joi.object({
    name: joi.string().alphanum().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'string.alphanum': ERROR_ALPHANUM
    }),
    type: joi.string().alphanum().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'string.alphanum': ERROR_ALPHANUM
    }),
    price: joi.number().messages({
        'number.base':ERROR_NUMBER,
    }),
    user: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    })
})

export default schema