import { Router } from "express"
import { allProperties, propertyByUser } from "../controller/property/read.js"
import { createProperty } from "../controller/property/create.js"
import { updateProperty } from "../controller/property/update.js"
import { deleteProperty } from "../controller/property/delete.js"
import validator from "../middleware/validator.js"
import validatorParam from "../middleware/validatorParam.js"
import schemaRead from "../schemas/property/read.js"
import schemaCreate from "../schemas/property/create.js"
import schemaUpdate from "../schemas/property/update.js"
import passport from "../middleware/passport.js"


const router = Router()

//create
router.post("/create", validator(schemaCreate), passport.authenticate('jwt',{session:false}), createProperty)

//read
router.get("/all", allProperties)
router.get("/propertyByUser/:user", validatorParam(schemaRead), passport.authenticate('jwt',{session:false}), propertyByUser)

//update
router.put("/update", validator(schemaUpdate), passport.authenticate('jwt',{session:false}), updateProperty)

//delete
router.delete("/delete", passport.authenticate('jwt',{session:false}), deleteProperty)

export default router