
import User from "../../models/User.js"


const createUser = async (req, res, next)=>{
    try {
        console.log("entro al create user");
        
        const create = await User.create(req.body)
        return res.status(201).json({
            succes:true,
            createUser: {...create._doc, password: "hiden"},
            token: req.token
        }) 
    } catch (error) {
        next(error)
    }
}

export {createUser}