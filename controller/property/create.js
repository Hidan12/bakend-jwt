import Property from "../../models/Property.js"


const createProperty = async (req, res, next)=>{
    //gracias a passaport se gurda la info en req.user se puede hacer un middleware para asegurarse que el id del usuario coinsida con el id que llega en el body
    try {
        const create = await Property.create(req.body)
        return res.status(201).json({
            createProperty: create
        }) 
    } catch (error) {
        next(error)
    }
}

export {createProperty}