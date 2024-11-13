import User from "../../models/User.js"



const updateUser = async (req, res, next)=>{
    try {
        const update = await User.findOneAndUpdate({_id: req.body._id}, req.body)
        return res.status(200).json({
            update: update
        })
    } catch (error) {
        next(error)
    }
}

export default updateUser