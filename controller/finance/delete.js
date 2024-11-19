import Finance from "../../models/Finance.js"


const deleteFinance = async (req, res, next)=>{
    const id = req.body._id
    try {
        const deleted = await Finance.deleteOne({_id: id})
        console.log(deleted, "----------------------------------------");
        
        return res.status(201).json({
            succes: deleted.deletedCount == 1 ? true : false,
            deleted: deleted
        })
    } catch (error) {
        next(error)
    }
}

export {deleteFinance}