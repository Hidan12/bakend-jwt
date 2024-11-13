import joi from "joi-oid"
import { ERROR_EMAIL, ERROR_EMPTY, ERROR_REQUIRED, ERROR_STRING } from "../../utils/msg-Joi.js"

const schema = joi.object({
    mail: joi.string().required().email().messages({
        'string.base':ERROR_STRING,
        "string.empty":ERROR_EMPTY,
        'any.required':ERROR_REQUIRED,
        'string.email': ERROR_EMAIL
    }),
    password: joi.string().required().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
      })
})
export default schema