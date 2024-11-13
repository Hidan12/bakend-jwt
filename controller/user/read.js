import User from "../../models/User.js"


const allUser = async (req,res,next)=>{
    try {
        const query = req.query.search ? {name: {$regex: '^'+req.query.search, $options:'i'}}:{}
        const users = await User.find(query)
        return res.status(201).json({
            users: users,
            length: users.length
        })
    } catch (error) {
        next(error)
    }
}
const idAllUsers = async (req,res, next) =>{
    try {
        const idUsers = await User.find().select("_id")
        return res.status(201).json({
            idAllUsers: idUsers
        })
    } catch (error) {
        next(error)
    }
}

export {allUser, idAllUsers}