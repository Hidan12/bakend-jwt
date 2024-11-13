import { Router } from "express"
import { allProperties } from "../controller/property/read.js"
import { createProperty } from "../controller/property/create.js"
import { updateProperty } from "../controller/property/update.js"
import { deleteProperty } from "../controller/property/delete.js"
import validator from "../middleware/validator.js"
import schemaCreate from "../schemas/property/create.js"
import schemaUpdate from "../schemas/property/update.js"
import passport from "../middleware/passport.js"

const router = Router()

//create
router.post("/create", passport.authenticate('jwt',{session:false}), validator(schemaCreate), createProperty)

//read
router.get("/all", allProperties)

//update
router.put("/update", passport.authenticate('jwt',{session:false}), validator(schemaUpdate), updateProperty)

//delete
router.delete("/delete", passport.authenticate('jwt',{session:false}), deleteProperty)

export default router