import Property from "../../models/Property.js"



const updateProperty = async (req, res, next)=>{
    try {
        const update = await Property.findOneAndUpdate({_id: req.body._id}, req.body, { new: true })
        return res.status(200).json({
            update: update
        })
    } catch (error) {
        next(error)
    }
}

export {updateProperty}