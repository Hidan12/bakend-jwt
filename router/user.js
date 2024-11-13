import { Router } from "express"
import { allUser, idAllUsers } from "../controller/user/read.js"
import { createUser } from "../controller/user/create.js"
import schemaCreate from "../schemas/user/create.js"
import schemaUpdate from "../schemas/user/update.js"
import validator from "../middleware/validator.js"
import updateUser from "../controller/user/update.js"
import existingUser from "../middleware/existingUser.js"
import { deleteUser } from "../controller/user/delete.js"
import passport from "../middleware/passport.js"
import passwordEncryption from "../middleware/passwordEncryption.js"

const router = Router()

//create
router.post("/create", validator(schemaCreate), existingUser, passwordEncryption, createUser)

//read
router.get("/all", passport.authenticate('jwt',{session:false}), allUser)
router.get("/idAllUser", idAllUsers)

//update
router.put("/update", validator(schemaUpdate), passport.authenticate('jwt',{session:false}), updateUser)

//delete
router.delete("/delete", passport.authenticate('jwt',{session:false}), deleteUser)

export default router