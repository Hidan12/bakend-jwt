import { Router } from "express"
import emailVerification from "../middleware/emailVerification.js"
import passwordVerification from "../middleware/passwordVerification.js"
import generateToken from "../middleware/generateToken.js"
import signIn from "../controller/authentication/signIn.js"
import schemaSignIn from "../schemas/authentication/signIn.js"
import validator from "../middleware/validator.js"
import passport from "../middleware/passport.js"
import signOut from "../controller/authentication/signout.js"
const router = Router()

router.post("/signIn", validator(schemaSignIn), emailVerification, passwordVerification, generateToken, signIn)
router.post("/signOut", passport.authenticate('jwt',{session:false}), signOut)

export default router