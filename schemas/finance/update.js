import joi from "joi-oid"
import { ERROR_BOOLEAN, ERROR_NUMBER, ERROR_STRING, ERROR_EMPTY, ERROR_DATE, ERROR_FORMAT_ID } from "../../utils/msg-Joi.js"

const schema = joi.object({
    date: joi.date().messages({
        'date.base': ERROR_DATE,
        'date.empty': ERROR_EMPTY
      }),
    description: joi.string().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY
    }),
    value: joi.number().messages({
        'number.base':ERROR_NUMBER
    }),
    active:joi.boolean().messages({
        'boolean.base': ERROR_BOOLEAN
      }),
    user: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    })
})

export default schema