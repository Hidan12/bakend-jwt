import Property from "../../models/Property.js"


const allProperties = async (req, res, next) =>{
    try {
        const query = req.query.search ? {name: {$regex: req.query.search, $options:'i'}}:{}
        const all = await Property.find(query)
        return res.status(200).json({
            allProperties: all,
            length: all.length
        })
    } catch (error) {
        next(error)
    }
}

const propertyByUser = async (req, res, next)=>{
    try {
        const query = req.params.user
        const all = await Property.find({user:query})
        return res.status(200).json({
            allProperties: all,
            length: all.length
        })
    } catch (error) {
        next(error)
    }
}

export {allProperties, propertyByUser}