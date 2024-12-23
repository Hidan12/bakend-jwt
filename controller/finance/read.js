import Finance from "../../models/Finance.js"
import "../../models/User.js"

const allFinances = async (req, res, next)=>{
    try {
        const query = req.query.search ? {description: {$regex: req.query.search, $options:'i'}}:{}
        const allFinance = await Finance.find(query).populate("user", "name").exec()
        
        return res.status(200).json({
            Finances: allFinance,
            length: allFinance.length
        })
    } catch (error) {
        next(error)
    }
}

const financesByIdUser = async(req,res, next) =>{
    try {
        const user = req.params.user
        const finances = await Finance.find({ user : user}).populate("user", "name").exec()
        return res.status(201).json({
            finances: finances,
            length: finances.length
        })
    } catch (error) {
        
    }
}

export {allFinances, financesByIdUser}