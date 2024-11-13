import Finance from "../../models/Finance.js"


const createFinance = async (req, res, next)=>{
    try {
        const create = await Finance.create(req.body)
        return res.status(201).json({
            createFinance: create
        }) 
    } catch (error) {
        next(error)
    }
}

export {createFinance}