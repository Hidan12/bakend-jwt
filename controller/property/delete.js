import Property from "../../models/Property.js"


const deleteProperty = async (req, res, next)=>{
    const id = req.body._id
    try {
        const deleted = await Property.deleteOne({_id: id})
        return res.status(201).json({
            succes: deleted.deletedCount == 1 ? true : false,
            deleted: deleted
        })
    } catch (error) {
        next(error)
    }
}

export {deleteProperty}