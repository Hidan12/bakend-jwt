import { Router } from "express"
import emailVerification from "../middleware/emailVerification.js"
import passwordVerification from "../middleware/passwordVerification.js"
import generateToken from "../middleware/generateToken.js"
import signIn from "../controller/authentication/signIn.js"
import schemaSignIn from "../schemas/authentication/signIn.js"
import validator from "../middleware/validator.js"
const router = Router()

router.get("/signIn", validator(schemaSignIn), emailVerification, passwordVerification, generateToken, signIn)

export default router