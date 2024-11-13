import User from "../../models/User.js"


const deleteUser = async (req, res, next)=>{
    const id = req.body._id
    try {
        const deleted = await User.deleteOne({_id:id})
        return res.status(201).json({
            succes: deleted.deletedCount == 1 ? true : false,
            deleted: deleted
        })
    } catch (error) {
        next(error)
    }
}

export {deleteUser}