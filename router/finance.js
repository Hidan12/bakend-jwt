import { Router } from "express"
import { allFinances, financesByIdUser } from "../controller/finance/read.js"
import { createFinance } from "../controller/finance/create.js"
import { updateFinance } from "../controller/finance/update.js"
import { deleteFinance } from "../controller/finance/delete.js"
import schemaRead from "../schemas/finance/read.js"
import schemaCreate from "../schemas/finance/create.js"
import schemaUpdate from "../schemas/finance/update.js"
import validator from "../middleware/validator.js"
import validatorParam from "../middleware/validatorParam.js"
import passport from "../middleware/passport.js"

const router = Router()

//create
router.post("/create", validator(schemaCreate), passport.authenticate('jwt',{session:false}), createFinance)

//read
router.get("/all", passport.authenticate('jwt',{session:false}), allFinances)
router.get("/financeByUser/:user", validatorParam(schemaRead), passport.authenticate('jwt',{session:false}), financesByIdUser)

//update
router.put("/update", validator(schemaUpdate), passport.authenticate('jwt',{session:false}), updateFinance)

//deleted
router.delete("/delete", passport.authenticate('jwt',{session:false}), deleteFinance)

export default router