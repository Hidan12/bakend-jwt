import Finance from "../../models/Finance.js"



const updateFinance = async (req, res, next)=>{
    try {
        console.log(req.body);
        
        const update = await Finance.findOneAndUpdate({_id: req.body._id}, req.body, { new: true })
        console.log(update);
        
        return res.status(200).json({
            update: update
        })
    } catch (error) {
        next(error)
    }
}

export {updateFinance}