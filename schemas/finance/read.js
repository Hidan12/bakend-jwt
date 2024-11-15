import joi from "joi-oid"
import { ERROR_REQUIRED } from "../../utils/msg-Joi.js"

const schema = joi.object({
    user: joi.objectId().required().messages({
        'any.required': ERROR_REQUIRED
    })
})
export default schema