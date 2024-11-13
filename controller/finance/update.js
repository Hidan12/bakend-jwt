import Finance from "../../models/Finance.js"



const updateFinance = async (req, res, next)=>{
    try {
        const update = await Finance.findOneAndUpdate({_id: req.body._id}, req.body)
        return res.status(200).json({
            update: update
        })
    } catch (error) {
        next(error)
    }
}

export {updateFinance}