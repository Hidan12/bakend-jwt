import { Router } from "express"
import user from "./user.js"
import finance from "./finance.js"
import property from "./property.js"
import sigIn from "./authentication.js"

const router = Router()

router.use("/users", user)
router.use("/finance", finance)
router.use("/property", property)
router.use("/login", sigIn)

export default router